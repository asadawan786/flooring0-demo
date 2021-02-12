import { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import nookies from 'nookies';
import FixedSider from './layout-components/Sider';
import MainLayout from './layout-components/Main';
import Header from './layout-components/Header';
import LogoTitle from './layout-components/LogoTitle';
import Drawer from './layout-components/Drawer';
import Menu from './layout-components/Menu';
import MyFooter from './layout-components/Footer';
import styled from 'styled-components';

const ContentWrapper = styled(Content)`
  margin: 20px 16px 15px 16px;
`;

class MyLayout extends Component {
  state = {
    collapsed: this.props.collapsed,
    drawerVisible: false
  };

  toggle = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 576) {
        this.setState(
          (state) => ({
            collapsed: !state.collapsed
          }),
          () => {
            nookies.set({}, 'collapsed', JSON.stringify(this.state.collapsed), {
              path: '/'
            });
          }
        );
      } else {
        this.setState((state) => ({
          drawerVisible: !state.drawerVisible
        }));
      }
    }
  };

  render() {
    const { collapsed, drawerVisible } = this.state;
    const { children } = this.props;

    return (
      <Layout className={'layout-fixed-height'}>
        <FixedSider
          collapsed={collapsed}
          setCollapsed={(collapsed) => {
            this.setState({ collapsed });
            nookies.set({}, 'collapsed', JSON.stringify(collapsed), {
              path: '/'
            });
          }}>
          <LogoTitle />
          <Menu closeDrawer={() => this.setState({ drawerVisible: false })} />
        </FixedSider>
        <MainLayout collapsed={collapsed}>
          <Header collapsed={collapsed} handleToggle={this.toggle} />
          <ContentWrapper>{children}</ContentWrapper>
          <MyFooter />
        </MainLayout>
        <Drawer
          drawerVisible={drawerVisible}
          closeDrawer={() => this.setState({ drawerVisible: false })}>
          <LogoTitle />

          <Menu closeDrawer={() => this.setState({ drawerVisible: false })} />
        </Drawer>
      </Layout>
    );
  }
}

export default MyLayout;
