import { Divider, Layout, Button } from "antd";
import { useTonConnectUI, TonConnectButton } from "@tonconnect/ui-react";
import "antd/dist/reset.css";

const { Header, Footer, Content } = Layout;

export default function SiteLayout({ children }) {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <Layout
      style={{
        minHeight: "100vh"
      }}
    >
      <Header
        style={{
          position: "sticky",
          zIndex: 99,
          padding: 0,
          backgroundColor: "#ddd",
          color: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h3
          style={{
            margin: 0,
            padding: "0 6px",
            fontWeight: "bold"
          }}
        >
          TipJar
        </h3>
        <TonConnectButton />
      </Header>

      <Content
        style={{
          margin: "12px 8px",
          padding: 12,
          minHeight: "100%",
          color: "black",
          maxHeight: "100%"
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <Divider />
        <a
          href="https://github.com/Salmandabbakuti"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©{new Date().getFullYear()} TipJar. Powered by TON & Next.js
        </a>
        <p style={{ fontSize: "12px" }}>v0.1.0</p>
      </Footer>
    </Layout>
  );
}
