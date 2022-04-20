import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const MyMenu = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu key="SubMenu" title="Navigation Three - Submenu" icon={<SettingOutlined />}>
      <Menu.ItemGroup title="Item 1">
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="disabled" disabled>
          Navigation Three
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);

export default MyMenu;