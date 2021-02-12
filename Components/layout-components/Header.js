import { Layout, Dropdown, Menu } from 'antd';
const { Header } = Layout;
import styled from 'styled-components';
import { Logo } from './LogoTitle';
import Link from 'next/link';
import { DownOutlined } from '@ant-design/icons';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import MenuFoldOutlined from '@ant-design/icons/lib/icons/MenuFoldOutlined';
import React from 'react';
import LogoutOutlined from '@ant-design/icons/lib/icons/LogoutOutlined';
import { HEADER } from '../../static/constants';

const TriggerBlock = styled.div`
  height: 100%;
  font-size: 16px;
  vertical-align: middle;
  padding: 0 20px;
`;
const StyledImageBlock = styled(TriggerBlock)`
  @media (min-width: 576px) {
    display: none !important;
  }
  ${'' /* cursor: pointer; */}
`;
const MobileLogo = styled(Logo)`
  vertical-align: -10px;
`;
const HeaderBlock = styled(TriggerBlock)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`;

const MyMenu = () => {
  return (
    <Menu>
      <Menu.Item key="profile">
        <DownOutlined />
        {HEADER.PROFILE}
      </Menu.Item>
      <Menu.Divider ClassName="menu-divider" />
      <Menu.Item key="logout">
        <LogoutOutlined />
        {HEADER.LOGOUT}
      </Menu.Item>
    </Menu>
  );
};

const MyHeader = ({ collapsed, handleToggle }) => {
  return (
    <Header className="header">
      <Link href="/">
        <a>
          <StyledImageBlock>
            <MobileLogo src="/static/logo.png" alt="logo" />
          </StyledImageBlock>
        </a>
      </Link>

      <TriggerBlock>
        <MenuFoldOutlined type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={handleToggle} />
      </TriggerBlock>
      <div className="margin-left-auto">
        <Dropdown overlay={<MyMenu />} placement="bottomRight">
          <HeaderBlock>
            <UserOutlined type="user" />
            <span>{HEADER.ADMIN}</span>
          </HeaderBlock>
        </Dropdown>
      </div>
    </Header>
  );
};
export default MyHeader;
