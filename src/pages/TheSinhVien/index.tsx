import { Button, Card, Col, Descriptions, Form, Input, Modal, Row, notification } from 'antd';
import { getSocketServerCard } from './connect/socketIO';
import { useEffect, useState } from 'react';
import { CopyOutlined, CheckCircleOutlined, DollarOutlined, SwapOutlined } from '@ant-design/icons';
import { instancePtit } from './connect/axios';
import copy from 'clipboard-copy';

const socketCard = getSocketServerCard();

const TaiKhoanTheSinhVien = () => {
  const [form] = Form.useForm();
  const [infoSV, setInfoSV] = useState<any>([]);
  const [amount, setAmount] = useState<any>(0);
  const [checkPayment, setCheckPayment] = useState(false);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const clientID = socketCard.id;

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleCopyClientID = () => {
    copy(clientID);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); // Đổi lại biểu tượng sau 2 giây
  };

  const getInfoSinhVien = async () => {
    await instancePtit
      .get('/api/user/getUser', {
        headers: {
          'x-access-token': localStorage.getItem('access_token'),
        },
      })
      .then((res: any) => {
        setInfoSV(res.data.user);
      })
      .catch((err) => console.log(err));
  };

  const getAmount = () => {
    socketCard.emit('client-wanna-get-amount', {
      roomID: localStorage.getItem('roomID'),
    });
  };

  const Payment = () => {
    setCheckPayment(true);
    socketCard.emit('client-wanna-create-payment', {
      roomID: localStorage.getItem('roomID'),
    });
  };

  const changePin = (oldPin: string, newPin: string) => {
    socketCard.emit('client-wanna-change-pin', {
      roomID: localStorage.getItem('roomID'),
      oldPin,
      newPin,
    });
  };

  useEffect(() => {
    getInfoSinhVien();
    getAmount();

    socketCard.on('response-get-amount', (data) => {
      console.log('info amount', data);
      setAmount(data.amount);
    });

    socketCard.on('return-handle-payment', (data) => {
      if (data.amount) {
        socketCard.emit('client-wanna-update-amount', {
          roomID: localStorage.getItem('roomID'),
          state: 'nap',
          amount: data.amount,
        });
      }
    });

    socketCard.on('response-update-amount', (data) => {
      if (data.result) {
        getAmount();
        setCheckPayment(false);
        notification.success({
          message: 'Success',
          description: 'Nạp tiền thành công.',
        });
      } else {
        notification.warning({
          message: 'Fail',
          description: 'Nạp tiền thất bại.',
        });
        setCheckPayment(false);
      }
    });

    socketCard.on('window-closed', () => {
      setCheckPayment(false);
    });

    socketCard.on('request-close-payment', () => {
      socketCard.emit('client-wanna-close-payment', { roomID: localStorage.getItem('roomID') });
    });

    socketCard.on('response-change-pin', (data) => {
      if(data.result){
        setVisible(false);
        form.resetFields();
        notification.success({
          message: 'Change pin',
          description: data.message,
        });
      }else{
        notification.error({
          message: 'Change pin',
          description: data.message,
        });
      }
    });
  }, []);

  return (
    <Card title="Quản lý tài khoản thẻ sinh viên">
      <Row gutter={[12, 12]}>
        <Col xs={24} md={14} xl={14}>
          <Descriptions
            layout="horizontal"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            title="Thông tin sinh viên"
          >
            <Descriptions.Item label="Họ và Tên">
              {infoSV?.name ?? 'Chưa xác định'}
            </Descriptions.Item>
            <Descriptions.Item label="Ngày sinh">
              {infoSV?.birth ?? 'Chưa xác định'}
            </Descriptions.Item>
            <Descriptions.Item label="Mã sinh viên">
              {infoSV?.code ?? 'Chưa xác định'}
            </Descriptions.Item>
            <Descriptions.Item label="Lớp">{infoSV?.class ?? 'Chưa xác định'}</Descriptions.Item>
            <Descriptions.Item label="Ngành">{infoSV?.major ?? 'Chưa xác định'}</Descriptions.Item>
            <Descriptions.Item label="Trường">{infoSV?.uni ?? 'Chưa xác định'}</Descriptions.Item>
            <Descriptions.Item label="Khoá">{infoSV?.course ?? 'Chưa xác định'}</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col xs={24} md={10} xl={10}>
          <Descriptions
            layout="horizontal"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            title="Thông tin trang web"
          >
            <Descriptions.Item label="Website ID">
              {clientID}{' '}
              {copied ? (
                <CheckCircleOutlined />
              ) : (
                <CopyOutlined onClick={() => handleCopyClientID()} />
              )}
            </Descriptions.Item>
          </Descriptions>
          <Descriptions
            layout="horizontal"
            bordered
            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
            title="Thông tin trong thẻ"
          >
            <Descriptions.Item label="Số tiền">{amount}đ</Descriptions.Item>
          </Descriptions>
          <Button
            type="primary"
            icon={<DollarOutlined />}
            onClick={() => Payment()}
            style={{ marginTop: '30px' }}
            loading={checkPayment}
          >
            Nạp tiền vào thẻ
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
            style={{ marginTop: '30px', marginLeft: '20px' }}
            loading={checkPayment}
            icon={<SwapOutlined />}
          >
            Thay đổi mã Pin
          </Button>
        </Col>
      </Row>
      <Modal
        title="Change Pin"
        open={visible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values: { oldPin: string; newPin: string; comfirmPin: string }) => {
            // alert(values.newPin);
            const oldPin = values.oldPin;
            const newPin = values.newPin;
            const comfirmPin = values.comfirmPin;
            if (!oldPin || !newPin || !comfirmPin) {
              notification.error({
                message: 'Change pin',
                description: 'Vui lòng thử lại.',
              });
              return;
            }
            if (newPin !== comfirmPin) {
              notification.error({
                message: 'Change pin',
                description: 'Comfirm chưa chính xác.',
              });
              return;
            }
            changePin(oldPin, newPin);
          }}
        >
          <Form.Item name="code">
            <Row gutter={[12, 0]} style={{ marginBottom: 12 }}>
              <Col xs={24}>
                <Form.Item name="oldPin" label="Old PIN">
                  <Input.Password placeholder="Nhập old PIN" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name="newPin" label="New PIN">
                  <Input.Password placeholder="Nhập new PIN" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item name="comfirmPin" label="Comfirm PIN">
                  <Input.Password placeholder="Comfirm PIN" />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <div style={{ display: 'flex' }}>
            <Button style={{ width: '50%', marginRight: '10px' }} onClick={handleCancel}>
              Cancel
            </Button>
            <Button htmlType="submit" type="primary" style={{ width: '50%' }}>
              Change
            </Button>
          </div>
        </Form>
      </Modal>
    </Card>
  );
};

export default TaiKhoanTheSinhVien;
