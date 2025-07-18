import { Divider, Layout } from "antd";
import { TonConnectButton } from "@tonconnect/ui-react";
import "antd/dist/reset.css";

const { Header, Footer, Content } = Layout;

export default function SiteLayout({ children }) {
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
          padding: "0 20px",
          background: "linear-gradient(135deg, #374151 0%, #1f2937 100%)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <h3
          style={{
            margin: 0,
            padding: "0 6px",
            fontWeight: "bold",
            color: "white",
            textShadow: "none"
          }}
        >
          💰 TipJar
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
      <Footer
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white",
          borderTop: "1px solid #e2e8f0",
          padding: "24px 0"
        }}
      >
        <a
          href="https://github.com/Salmandabbakuti"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#94a3b8",
            textDecoration: "none",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => (e.target.style.color = "#f1f5f9")}
          onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
        >
          ©{new Date().getFullYear()} TipJar. Powered by TON & React
        </a>
        <p style={{ fontSize: "12px", color: "#64748b", margin: "8px 0 0 0" }}>
          v0.1.0
        </p>
      </Footer>
    </Layout>
  );
}
