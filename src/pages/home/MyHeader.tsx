import React from 'react';
import { Header } from 'antd/es/layout/layout';
import { Col, MenuProps, Row } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';

const MyHeader: React.FC = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const items1: MenuProps['items'] = [
    {
      key: 'key1',
      label: `自介`,
    },
    {
      key: 'key2',
      label: `經歷`,
    },
    {
      key: 'key3',
      label: `Side Project`,
    },
    {
      key: 'key4',
      label: `技能樹`,
    },
  ];

  return (
    <Header>
      <Row justify={'space-between'}>
        <Col>
          <div style={{ color: 'white', fontWeight: 'bold', fontSize: '40px' }}>
            How's Code
          </div>
        </Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['key3']}
            items={items1}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default MyHeader;
