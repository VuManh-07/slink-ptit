import avatar from '@/assets/logo.png';
import { Role } from '@/utils/constants';
import {
  CalendarOutlined,
  ContactsOutlined,
  MailOutlined,
  ManOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-layout';
import type { Input } from 'antd';
import { Card, Col, Row } from 'antd';
import moment from 'moment';
import { Component } from 'react';
import type { RouteChildrenProps } from 'react-router';
import type { Dispatch } from 'umi';
import { connect } from 'umi';
import styles from './Center.less';
import Profile from './components/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import type { ModalState } from './model';

const operationTabList = [
  {
    key: 'editProfile',
    tab: 'Thông tin tài khoản',
  },
  // {
  //   key: 'changePassword',
  //   tab: <span>Đổi mật khẩu</span>,
  // },
];

interface CenterProps extends RouteChildrenProps {
  dispatch: Dispatch;
  currentUser: Partial<Login.Profile>;
  currentUserLoading: boolean;
}
interface CenterState {
  tabKey?: 'editProfile' | 'changePassword';
}

class Center extends Component<CenterProps, CenterState> {
  state: CenterState = {
    tabKey: 'editProfile',
  };

  public input: Input | null | undefined = undefined;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'accountAndcenter/fetchCurrent',
    });
  }

  onTabChange = (key: string) => {
    this.setState({
      tabKey: key as CenterState['tabKey'],
    });
  };

  renderChildrenByTabKey = (tabKey: CenterState['tabKey']) => {
    if (tabKey === 'editProfile') {
      return <Profile />;
    }
    // if (tabKey === 'changePassword') {
    //   return <ChangePassword />;
    // }

    return null;
  };

  renderUserInfo = (currentUser: Partial<Login.Profile>) => {
    let gioiTinhText = 'Chưa xác định';
    if (currentUser?.gioi_tinh === '0') gioiTinhText = 'Nam';
    else if (currentUser.gioi_tinh === '1') gioiTinhText = 'Nữ';
    return (
      <div className={styles.detail}>
        <p>
          <ContactsOutlined
            style={{
              marginRight: 8,
            }}
          />
          {currentUser?.so_dien_thoai || 'Chưa cập nhật'}
        </p>
        <p>
          <UserOutlined
            style={{
              marginRight: 8,
            }}
          />
          {currentUser?.ma_dinh_danh || 'Chưa cập nhật'}
        </p>
        <p>
          <CalendarOutlined
            style={{
              marginRight: 8,
            }}
          />
          {currentUser?.ngay_sinh
            ? moment(currentUser?.ngay_sinh).format('DD/MM/YYYY')
            : 'Chưa cập nhật'}
        </p>
        <p>
          <ManOutlined
            style={{
              marginRight: 8,
            }}
          />
          {gioiTinhText}
        </p>
        <p>
          <MailOutlined
            style={{
              marginRight: 8,
            }}
          />
          {currentUser?.email || 'Chưa cập nhật'}
        </p>
      </div>
    );
  };

  render() {
    const { tabKey } = this.state;
    const { currentUser } = this.props;
    const dataLoading = false;
    return (
      <GridContent>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card bordered={false} style={{ marginBottom: 24 }} loading={dataLoading}>
              {!dataLoading && (
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentUser?.avatar_path || avatar} />
                    <div className={styles.name}>{currentUser?.name || 'Chưa cập nhật'}</div>
                    <div>{Role?.[currentUser?.vai_tro ?? ''] || 'Chưa cập nhật'}</div>
                  </div>
                  {this.renderUserInfo(currentUser)}
                </div>
              )}
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={tabKey}
              onTabChange={this.onTabChange}
            >
              {this.renderChildrenByTabKey(tabKey)}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default connect(
  ({
    loading,
    accountAndcenter,
  }: {
    loading: { effects: Record<string, boolean> };
    accountAndcenter: ModalState;
  }) => ({
    currentUser: accountAndcenter.currentUser,
    currentUserLoading: loading.effects['accountAndcenter/fetchCurrent'],
  }),
)(Center);
