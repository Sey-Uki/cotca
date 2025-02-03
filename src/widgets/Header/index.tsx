import {
  CarOutlined,
  CompassOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export const AppHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <div
          className="logo"
          style={{
            color: "#1677ff",
            fontSize: 32,
            fontWeight: "bold",
            marginRight: 20,
          }}
        >
          COTCA
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "inherit",
          }}
        >
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ flex: 1, justifyContent: "end" }}
          >
            <Menu.Item key="1">Автовладельцам</Menu.Item>
            <Menu.Item key="2">Владельцам СТО</Menu.Item>
            <Menu.Item key="3">Юр. лицам</Menu.Item>
          </Menu>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Menu.Item key="1">
              <FormOutlined style={{ marginRight: 5 }} />
              Создать заявку
            </Menu.Item>
            <Menu.Item key="2">
              <CarOutlined style={{ marginRight: 5 }} />
              Гараж
            </Menu.Item>
            <Menu.Item key="3">
              <CompassOutlined style={{ marginRight: 5 }} />
              Карта
            </Menu.Item>
          </Menu>
        </div>
        <div
          style={{
            marginLeft: 20,
          }}
        >
          <UserOutlined />
        </div>
      </Header>
    </Layout>
  );
};
