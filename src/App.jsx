import { useState } from "react";
import "@twa-dev/sdk";
import {
  useTonConnectUI,
  useTonWallet,
  useTonAddress
} from "@tonconnect/ui-react";
import {
  Card,
  Input,
  Button,
  InputNumber,
  Typography,
  Space,
  message,
  Steps
} from "antd";
import {
  SendOutlined,
  WalletOutlined,
  UserOutlined,
  DollarOutlined,
  MessageOutlined
} from "@ant-design/icons";
import "./App.css";

const { Title, Text } = Typography;

function App() {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [tipAmount, setTipAmount] = useState(0.1);
  const [message_text, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();
  const tonAddress = useTonAddress(true);
  console.log("Wallet Address:", tonAddress);

  const handleSendTip = async () => {
    if (!wallet) {
      message.error("Please connect your wallet first");
      return;
    }

    if (!recipientAddress) {
      message.error("Please enter a recipient address");
      return;
    }

    if (!tipAmount || tipAmount <= 0) {
      message.error("Please enter a valid tip amount");
      return;
    }

    setLoading(true);

    try {
      // Convert TON to nanotons (1 TON = 1e9 nanotons)
      const amountInNanotons = Math.floor(tipAmount * 1e9);

      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, // 60 seconds from now
        messages: [
          {
            address: recipientAddress,
            amount: amountInNanotons.toString(),
            payload: message_text || "Tip from TipJar 🎉"
          }
        ]
      };

      const result = await tonConnectUI.sendTransaction(transaction);

      if (result) {
        message.success("Tip sent successfully! 🎉");
        // Reset form
        setRecipientAddress("");
        setTipAmount(0.1);
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending tip:", error);
      message.error("Failed to send tip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const quickTipAmounts = [0.1, 0.5, 1, 2, 5, 10];

  const steps = [
    {
      title: "Connect",
      description: "Connect your TON wallet",
      icon: <WalletOutlined />
    },
    {
      title: "Enter Details",
      description: "Add recipient and amount",
      icon: <UserOutlined />
    },
    {
      title: "Send Tip",
      description: "Confirm transaction",
      icon: <SendOutlined />
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <Space
        direction="vertical"
        size="large"
        style={{
          width: "100%",
          maxWidth: 800,
          margin: "0 auto"
        }}
      >
        {/* Header */}
        <Card
          style={{
            textAlign: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            color: "white"
          }}
        >
          <Title level={2} style={{ color: "white", margin: 0 }}>
            💰 TipJar
          </Title>
          <Text style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "16px" }}>
            Send tips easily on the TON blockchain
          </Text>
        </Card>

        {/* Main Content */}
        {wallet ? (
          <Card style={{ width: "100%" }}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Input
                size="large"
                placeholder="Recipient TON address (EQC...)"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                prefix={<UserOutlined style={{ color: "#1890ff" }} />}
              />

              <Space
                direction="vertical"
                size="small"
                style={{ width: "100%" }}
              >
                <InputNumber
                  size="large"
                  style={{ width: "100%" }}
                  value={tipAmount}
                  onChange={(value) => setTipAmount(value)}
                  min={0.001}
                  max={1000}
                  step={0.1}
                  precision={3}
                  placeholder="Amount in TON"
                  prefix={<DollarOutlined />}
                />
                <Space wrap style={{ width: "100%", justifyContent: "center" }}>
                  {quickTipAmounts.map((amount) => (
                    <Button
                      key={amount}
                      size="small"
                      type={tipAmount === amount ? "primary" : "default"}
                      onClick={() => setTipAmount(amount)}
                      style={{ borderRadius: "20px" }}
                    >
                      {amount} TON
                    </Button>
                  ))}
                </Space>
              </Space>

              <Input.TextArea
                placeholder="Add a message with your tip... (optional)"
                value={message_text}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                maxLength={200}
                prefix={<MessageOutlined />}
                showCount
              />

              <Button
                type="primary"
                size="large"
                block
                icon={<SendOutlined />}
                loading={loading}
                onClick={handleSendTip}
                style={{
                  height: "50px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  background: "linear-gradient(45deg, #1890ff, #40a9ff)"
                }}
              >
                Send Tip 🚀
              </Button>
            </Space>
          </Card>
        ) : (
          <Card
            style={{ textAlign: "center", padding: "60px 20px", width: "100%" }}
          >
            <Space direction="vertical" size="large">
              <WalletOutlined style={{ fontSize: "72px", color: "#1890ff" }} />
              <Title level={3} style={{ margin: 0 }}>
                Connect Your Wallet
              </Title>
              <Text type="secondary" style={{ fontSize: "16px" }}>
                Connect your TON wallet to start sending tips
              </Text>
            </Space>
          </Card>
        )}

        {/* How to Use Steps */}
        <Card title="How to Use" style={{ width: "100%" }}>
          <Steps
            current={wallet ? 1 : 0}
            items={steps}
            direction="horizontal"
            size="small"
          />
        </Card>
      </Space>
    </div>
  );
}

export default App;
