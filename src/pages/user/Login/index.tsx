import Footer from '@/components/Footer';
import LoginWithKeycloak from '@/components/KeycloakLogin';
import {
  adminlogin,
  getInfo,
  getInfoAdmin,
  login,
  loginWithKeyCloak,
} from '@/services/ant-design-pro/api';
import data from '@/utils/data';
import { getPhanNhom } from '@/utils/utils';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  message,
  notification,
  Row,
  Steps,
  Tabs,
} from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import React, { useEffect, useRef, useState } from 'react';
import OneSignal from 'react-onesignal';
import Recaptcha from 'react-recaptcha';
import { FormattedMessage, history, useIntl, useModel } from 'umi';
import styles from './index.less';
import rules from '@/utils/rules';
import { getSocketServerCard, getSocketServerPTIT } from '@/pages/TheSinhVien/connect/socketIO';
 
const socketCard = getSocketServerCard();
const socketPtit = getSocketServerPTIT();

const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }, 2000);
};

const Login: React.FC = () => {
  const [count, setCount] = useState<number>(Number(localStorage?.getItem('failed')) || 0);
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const [isVerified, setIsverified] = useState<boolean>(true);
  const [visibleCaptcha, setVisibleCaptcha] = useState<boolean>(false);
  const [visibleCaptcha2, setVisibleCaptcha2] = useState<boolean>(false);
  // const [visibleForgotPassword, setVisibleForgotPassword] = useState<boolean>(false);
  const [oneSignalId, setOneSignalId] = useState<string | null | undefined>();
  const recaptchaRef = useRef(null);
  const intl = useIntl();
  const getUserIdOnesignal = async () => {
    const id = await OneSignal.getUserId();
    setOneSignalId(id);
  };
  useEffect(() => {
    getUserIdOnesignal();
  }, []);
  const handleRole = async (role: { accessToken: string; user?: Login.Profile }) => {
    const defaultloginSuccessMessage = intl.formatMessage({
      id: 'pages.login.success',
      defaultMessage: 'success',
    });
    localStorage.setItem('token', role?.accessToken);
    localStorage.setItem('vaiTro', role?.user?.vai_tro ?? 'guest');
    const info = await getInfo();
    let phanNhom;
    if (role?.user?.systemRole !== 'Guest') phanNhom = await getPhanNhom();
    setInitialState({
      ...initialState,
      currentUser: info?.data?.data ?? {},
      phanNhom,
    });
    message.success(defaultloginSuccessMessage);
    history.push(data?.path?.[role?.user?.vai_tro ?? 'guest'] ?? '/');
  };

  const handleLoginWithKeycloak = async (accessToken: string) => {
    const msg = await loginWithKeyCloak({
      accessToken,
      oneSignalId: oneSignalId || '',
    });
    if (msg.status === 201) {
      handleRole(msg?.data?.data);
    }
  };

  const handleSubmit = async (values: { login: string; password: string }) => {
    try {
      if (type === 'account') {
        setSubmitting(true);
        const msg = await login({
          ...values,
          deviceId: 'deviceId',
          oneSignalId: oneSignalId || '',
        });
        if (msg.status === 201) {
          handleRole(msg?.data?.data);
        }
      } else {
        if (!isVerified) {
          message.error('Vui lòng xác thực Captcha');
          return;
        }
        setSubmitting(true);
        const msg = await adminlogin({ ...values, username: values?.login ?? '' });
        if (msg.status === 201 && msg?.data?.data?.accessToken) {
          const defaultloginSuccessMessage = intl.formatMessage({
            id: 'pages.login.success',
            defaultMessage: 'success',
          });
          localStorage.setItem('token', msg?.data?.data?.accessToken);
          localStorage.setItem('vaiTro', msg?.data?.data.user.systemRole);
          const info = await getInfoAdmin();
          setInitialState({
            ...initialState,
            currentUser: info?.data?.data,
          });
          message.success(defaultloginSuccessMessage);
          history.push(data?.path?.[msg?.data?.data?.user?.systemRole] ?? '/');
          localStorage.removeItem('failed');
          return;
        }
      }
    } catch (error) {
      if (count >= 4) {
        setIsverified(false);
        setVisibleCaptcha(!visibleCaptcha);
        setVisibleCaptcha2(true);
      }
      setCount(count + 1);
      localStorage.setItem('failed', (count + 1).toString());
      const defaultloginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: 'failure',
      });
      message.error(defaultloginFailureMessage);
    }
    setSubmitting(false);
  };

  const verifyCallback = (response: any) => {
    if (response) setIsverified(true);
    else setIsverified(false);
  };


  const [currentStep, setCurrentStep] = useState(0); 

  const ConnectCard = (id: string)=>{
    setSubmitting(true);
    localStorage.setItem('roomID', id);
    socketCard.emit('join', id);
    // localStorage.setItem('token', values.roomID);
    setCurrentStep(1);
    setSubmitting(false);
  }

  const LoginCard = (pin: string) => {
    setSubmitting(true);
    const roomID = localStorage.getItem('roomID');
    localStorage.setItem('pin', pin);
    socketCard.emit('client-wanna-login-card', { roomID, pin});  
  }

  const LoginPage = ()=>{
    const roomID = localStorage.getItem('roomID');
    const pin = localStorage.getItem('pin'); 
    const clientID = socketPtit.id; 
    socketCard.emit('client-wanna-login-page', { roomID, pin, clientID }); 
  }

  useEffect(() => {
    socketCard.on('card-response-login-card', (data: any) => {
      if (data.result) {
        setCurrentStep(2);
        setSubmitting(false);
      }
      console.log(data.message);
    });

    socketPtit.on('res-token', (data) => {
      const accessToken = data.accessToken;
      if (accessToken) {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('token', accessToken);
        localStorage.removeItem('pin');
        history.push('/taikhoanthesinhvien');
      } else {
        notification.error({
          message: 'Please try again!',
        });
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            {/* <Link to="/"> */}
            <div className={styles.title1}>BỘ THÔNG TIN VÀ TRUYỀN THÔNG</div>
            <div className={styles.title2}>HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img alt="logo" className={styles.logo} src="/logo.png" />{' '}
              <div className={styles.title3}>PTIT S-LINK</div>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <ConfigProvider locale={viVN}>
          <div style={{ width: '500px', margin: 'auto' }}>
            <Steps
              current={currentStep}
              // progressDot
              size="small"
              style={{ marginBottom: 18, paddingTop: 0, marginTop: 30 }}
            >
              <Steps.Step title="Kết nối với thẻ" />
              <Steps.Step title="Nhập mã PIN" disabled={currentStep == 0} />
              <Steps.Step
                title="Đăng nhập vào trang"
                disabled={currentStep == 0 || currentStep == 1}
              />
            </Steps>

            {currentStep === 0 ? (
              <Form
                layout="vertical"
                onFinish={async (values) => {
                  console.log('values', values);
                  if (values.roomID) {
                    ConnectCard(values.roomID)
                  } else {
                    message.error('Vui lòng nhập mã kết nối!');
                    return;
                  }
                }}
                style={{ marginTop: '50px' }}
              >
                <Form.Item name="code">
                  <Row gutter={[12, 0]} style={{ marginBottom: 12 }}>
                    <Col xs={24}>
                      <Form.Item name="roomID" label="Mã kết nối" rules={[...rules.required]}>
                        <Input placeholder="Nhập mã kết nối" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button
                  loading={submitting}
                  htmlType="submit"
                  type="primary"
                  style={{ width: '100%' }}
                >
                  Kết nối
                </Button>
              </Form>
            ) : currentStep === 1 ? (
              <Form
                layout="vertical"
                onFinish={async (values: { pin: string }) => {
                  console.log('values', values);
                  if (values.pin) {
                    LoginCard(values.pin)
                  } else {
                    message.error('Vui lòng nhập mã PIN!');
                    return;
                  }
                }}
                style={{ marginTop: '50px' }}
              >
                <Form.Item name="code">
                  <Row gutter={[12, 0]} style={{ marginBottom: 12 }}>
                    <Col xs={24}>
                      <Form.Item name="pin" label="Mã PIN" rules={[...rules.required]}>
                        <Input placeholder="Nhập mã PIN" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form.Item>
                <Button
                  loading={submitting}
                  htmlType="submit"
                  type="primary"
                  style={{ width: '100%' }}
                >
                  Đăng nhập vào thẻ
                </Button>
              </Form>
            ) : currentStep === 2 ? (
              <Button
                loading={submitting}
                type="primary"
                style={{ width: '100%' }}
                onClick={() => LoginPage()}
              >
                Đăng nhập vào trang
              </Button>
            ) : null}

            {/* <LoginWithKeycloak
              title="Đăng nhập với Slink ID"
              onLoginSuccess={handleLoginWithKeycloak}
            /> */}
            {/* <ProForm
              isKeyPressSubmit
              initialValues={{
                autoLogin: true,
              }}
              submitter={{
                searchConfig: {
                  submitText: intl.formatMessage({
                    id: 'pages.login.submit',
                    defaultMessage: 'submit',
                  }),
                },
                render: (_, dom) => {
                  return (
                    <>
                      {type === 'accountAdmin' && <>{dom.pop()}</>}
                      {type !== 'accountAdmin' && (
                        <LoginWithKeycloak
                          title="Đăng nhập với Slink ID"
                          onLoginSuccess={handleLoginWithKeycloak}
                        />
                      )}
                    </>
                  );
                },
                submitButtonProps: {
                  loading: submitting,
                  size: 'large',
                  style: {
                    width: '100%',
                  },
                },
              }}
              onFinish={async (values) => {
                handleSubmit(values as { login: string; password: string });
              }}
            >
              <Tabs activeKey={type} onChange={setType}>
                <Tabs.TabPane
                  key="account"
                  tab={intl.formatMessage({
                    id: 'pages.login.accountLogin.tab',
                    defaultMessage: 'tab',
                  })}
                />
                <Tabs.TabPane
                  key="accountAdmin"
                  tab={intl.formatMessage({
                    id: 'pages.login.accountLoginAdmin.tab',
                    defaultMessage: 'tab',
                  })}
                />
              </Tabs>

              {type === 'accountAdmin' && (
                <>
                  <ProFormText
                    name="login"
                    fieldProps={{
                      size: 'large',
                      prefix: <UserOutlined className={styles.prefixIcon} />,
                    }}
                    placeholder={intl.formatMessage({
                      id: 'pages.login.username.placeholder',
                      defaultMessage: 'Nhập tên đăng nhập',
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="pages.login.username.required"
                            defaultMessage="required!"
                          />
                        ),
                      },
                      // ...rules.username,
                    ]}
                  />
                  <ProFormText.Password
                    name="password"
                    fieldProps={{
                      size: 'large',
                      prefix: <LockOutlined className={styles.prefixIcon} />,
                    }}
                    placeholder={intl.formatMessage({
                      id: 'pages.login.password.placeholder',
                      defaultMessage: 'placeholder: ant.design',
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="pages.login.password.required"
                            defaultMessage="required"
                          />
                        ),
                      },
                      // ...rules.password,
                    ]}
                  />
                </>
              )}
            </ProForm> */}
            <br />
            <div style={{ textAlign: 'center' }}>
              {/* <Button
                onClick={() => {
                  window.open(
                    'https://slinkid.ptit.edu.vn/auth/realms/master/login-actions/reset-credentials',
                  );
                }}
                type="link"
              >
                Quên mật khẩu?
              </Button> */}
              {/* {type === 'accountAdmin' && visibleCaptcha && count >= 5 && (
                <Recaptcha
                  ref={recaptchaRef}
                  size="normal"
                  sitekey="6LelHsEeAAAAAJmsVdeC2EPNCAVEtfRBUGSKireh"
                  render="explicit"
                  hl="vi"
                  // onloadCallback={callback}
                  verifyCallback={verifyCallback}
                />
              )}
              {type === 'accountAdmin' && !visibleCaptcha && visibleCaptcha2 && count >= 5 && (
                <Recaptcha
                  ref={recaptchaRef}
                  size="normal"
                  sitekey="6LelHsEeAAAAAJmsVdeC2EPNCAVEtfRBUGSKireh"
                  render="explicit"
                  hl="vi"
                  // onloadCallback={callback}
                  verifyCallback={verifyCallback}
                />
              )} */}
            </div>
          </div>
        </ConfigProvider>
      </div>

      <Footer />
    </div>
  );
};

export default Login;

export { goto };
