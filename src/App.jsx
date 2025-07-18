import { useState } from "react";
import "@twa-dev/sdk";
import { useTonConnectUI, useTonWallet, CHAIN } from "@tonconnect/ui-react";
import {
  Card,
  Input,
  Button,
  InputNumber,
  Typography,
  Space,
  message,
  Steps,
  Form
} from "antd";
import {
  SendOutlined,
  WalletOutlined,
  UserOutlined,
  DollarOutlined
} from "@ant-design/icons";
import "./App.css";

const { Title, Text } = Typography;

const quickTipAmounts = [0.1, 0.5, 1, 2, 5, 10, 15, 25];

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

export default function App() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  const handleSendTip = async (values) => {
    if (!wallet) return message.error("Please connect your wallet first");
    setLoading(true);
    try {
      // Convert TON to nanotons (1 TON = 1e9 nanotons)
      const amountInNanotons = Math.floor(values.tipAmount * 1e9);

      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 120, // 120 seconds from now
        network: CHAIN.TESTNET, // Use CHAIN.MAINNET for mainnet
        messages: [
          {
            address: values.recipientAddress,
            amount: amountInNanotons.toString(),
            payload: values.message || "Tip from TipJar 🎉"
          }
        ]
      };

      const result = await tonConnectUI.sendTransaction(transaction);

      if (result) {
        message.success("Tip sent successfully! 🎉");
        // Reset form
        form.resetFields();
      }
    } catch (error) {
      console.error("Error sending tip:", error);
      message.error("Failed to send tip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            Send tips easily from Telegram with TON
          </Text>
        </Card>

        {/* Main Content */}
        {wallet ? (
          <Card style={{ width: "100%" }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSendTip}
              initialValues={{
                tipAmount: 0.1
              }}
            >
              <Form.Item
                name="recipientAddress"
                label="Recipient Address"
                rules={[
                  { required: true, message: "Please enter recipient address" },
                  { min: 10, message: "Please enter a valid TON address" }
                ]}
              >
                <Input
                  size="large"
                  placeholder="Recipient TON address (EQC...)"
                  prefix={<UserOutlined style={{ color: "#1890ff" }} />}
                />
              </Form.Item>

              <Form.Item
                name="tipAmount"
                label="Amount (TON)"
                rules={[
                  { required: true, message: "Please enter tip amount" },
                  {
                    type: "number",
                    min: 0.001,
                    max: 1000,
                    message: "Amount must be between 0.001 and 1000 TON"
                  }
                ]}
              >
                <InputNumber
                  size="large"
                  style={{ width: "100%" }}
                  min={0.001}
                  max={1000}
                  step={0.1}
                  precision={3}
                  placeholder="Amount in TON"
                  prefix={<DollarOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Space wrap style={{ width: "100%", justifyContent: "center" }}>
                  {quickTipAmounts.map((amount) => (
                    <Button
                      key={amount}
                      size="small"
                      type={
                        form.getFieldValue("tipAmount") === amount
                          ? "primary"
                          : "default"
                      }
                      onClick={() => form.setFieldsValue({ tipAmount: amount })}
                      style={{ borderRadius: "20px" }}
                    >
                      {amount} TON
                    </Button>
                  ))}
                </Space>
              </Form.Item>

              <Form.Item
                name="message"
                label="Message (Optional)"
                rules={[
                  { max: 200, message: "Message cannot exceed 200 characters" }
                ]}
              >
                <Input.TextArea
                  placeholder="Add a message with your tip... (optional)"
                  rows={3}
                  maxLength={200}
                  showCount
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  block
                  icon={<SendOutlined />}
                  loading={loading}
                  htmlType="submit"
                  style={{
                    height: "50px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    background: "linear-gradient(45deg, #1890ff, #40a9ff)"
                  }}
                >
                  Send Tip 🚀
                </Button>
              </Form.Item>
            </Form>
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
