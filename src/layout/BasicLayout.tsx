import { Button, Layout, Menu } from "antd";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { RouteComponentProps } from "react-router-dom";
import AppStore from "../store/AppStore";
import UserStore from "../store/UserStore";
import styles from "./BasicStyle.module.less";

interface IBasicLayoutProps extends RouteComponentProps {
  title?: string;
  loading?: boolean;
  appStore?: AppStore;
  userStore?: UserStore;
}

interface IBasicLayoutState {}

const { Header, Content, Footer, Sider } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

/**
 * 基础布局组件
 */

@inject("appStore", "userStore")
@observer
export default class BasicLayout extends Component<
  IBasicLayoutProps,
  IBasicLayoutState
> {
  constructor(props: IBasicLayoutProps) {
    super(props);
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {}

  render() {
    const { userStore } = this.props;
    let layout = (
      <DocumentTitle title={"系统"}>
        <Layout className={styles.basicWrap}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={styles.site_layout}>
            <Header
              className={styles.site_layout_background}
              style={{ padding: 0 }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
              <Button className={styles.logout}
                onClick={() => {
                  //this.props.history.push('/login');
                  userStore?.loginOutAction();
                }}
              >
                退出
              </Button>
            </Header>
            <Content
              className={styles.site_layout_background}
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
    return layout;
  }
}
