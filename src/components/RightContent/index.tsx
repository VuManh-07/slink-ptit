import { Setting } from '@/utils/constants';
import { Space } from 'antd';
import React from 'react';
import { useModel, useAccess } from 'umi';
import NoticeIcon from '../NoticeIcon';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const access = useAccess();
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      {!access.admin && !access.guest && <NoticeIcon />}
      <Avatar menu />
      <div style={{ color: '#fff' }}>{Setting.version}</div>
    </Space>
  );
};

export default GlobalHeaderRight;
