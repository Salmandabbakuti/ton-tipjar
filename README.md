# 💰 TipJar - Telegram Mini App

A **Telegram Mini App** for sending tips on the TON blockchain. This is a basic dApp designed to help developers understand the TON ecosystem, TON Connect integration, and Telegram Mini App development. Built with React, Vite, and TON Connect, TipJar provides a seamless way to send cryptocurrency tips directly within Telegram.

🚀 **Launch the Mini App**: Go to [@tontipjar_bot](https://t.me/tontipjar_bot) on Telegram and click "Launch" to try it out!

## 🎯 Purpose

This project serves as an **educational example** to demonstrate:

- How to build Telegram Mini Apps
- TON Connect wallet integration
- TON blockchain interactions within a Mini App(Telegram)

> This is a **very basic dApp** I built for learning purposes to better understand the TON Ecosystem, Mini Apps, and tooling. The goal is to grasp the fundamentals of TON Connect, Telegram Mini App development, and the broader TON ecosystem so that I can build more complex dApps in future iterations.

## ✨ Features

- **🔹 Telegram Mini App**: Native integration with Telegram messenger
- **🔗 TON Connect Integration**: Seamlessly connect with TON wallets
- **💸 Easy Tip Sending**: Send tips with just a few clicks
- **🎨 Modern UI**: Beautiful interface optimized for mobile devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development
- **🛡️ Secure**: Direct blockchain transactions with wallet confirmation
- **💬 Custom Messages**: Add personalized messages with your tips
- **🔢 Quick Amounts**: Pre-defined tip amounts for convenience
- **📚 Educational**: Learn TON Connect and Mini App development

## 🚀 Getting Started

### Project Structure

```
ton-tipjar/
├── public/
│   ├── tonconnect-manifest.json
│   ├── terms.html
│   └── privacy.html
├── src/
│   ├── components/
│   │   ├── SiteLayout.jsx
│   │   └── TonConnectProvider.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

#### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A TON wallet for testing
- Telegram account (for Mini App testing)

#### Steps

```bash
npm install

npm run dev
```

This will start the development server at `http://localhost:5173`.

## 📱 How to Use

### In Telegram (Recommended)

1. **Open [@tontipjar_bot](https://t.me/tontipjar_bot)** in Telegram
2. **Click "Launch"** to open the Mini App
3. **Connect Your Wallet**

   - Tap "Connect Wallet"
   - Choose your TON wallet (Tonkeeper, MyTonWallet, etc.)
   - Authorize the connection

4. **Send a Tip**
   - Enter the recipient's TON address
   - Select or enter the tip amount
   - Add an optional message
   - Tap "Send Tip 🚀"
   - Confirm the transaction in your wallet

## 🌐 Deployment

### Deploy as Telegram Mini App

1. **Deploy to a hosting service** (Vercel, Netlify, etc.)
2. **Create a Telegram Bot** via [@BotFather](https://t.me/BotFather)
3. **Set up Mini App** with your deployed URL in Bot settings
4. **Update TON Connect manifest** with your domain

### 📋 TON Connect & Mini App Configuration

This Mini App demonstrates:

1. **TON Connect Integration**: How to connect wallets in a Mini App environment
2. **Telegram Web App SDK**: Using `@twa-dev/sdk` for Telegram-specific features
3. **Telegram Mini Apps**: Optimized for Telegram's mobile-first experience

### Configuration Steps:

1. **Update the manifest URL** in `src/components/TonConnectProvider.jsx`
2. **Configure the manifest** in `public/tonconnect-manifest.json`
3. **Add your domain** to the manifest for production
4. **Set up Telegram Bot** for Mini App hosting

## 🛠️ Built With

- **[TON Connect](https://docs.ton.org/develop/dapps/ton-connect)** - TON blockchain wallet integration
- **[Telegram Mini Apps](https://docs.ton.org/develop/dapps/telegram-apps)** - Telegram integration
- **[React](https://reactjs.org/)** - Frontend framework
- **[Vite](https://vitejs.dev/)** - Build tool and development server
- **[Ant Design](https://ant.design/)** - UI component library
- **[@twa-dev/sdk](https://github.com/twa-dev/sdk)** - Telegram Web App SDK

## 🎓 Learning Resources

- [TON Connect Documentation](https://docs.ton.org/v3/guidelines/ton-connect/guidelines/how-ton-connect-works)
- [Telegram Mini Apps Guide](https://docs.ton.org/v3/guidelines/dapps/tma/overview)
- [TON Blockchain Docs](https://docs.ton.org/)
- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🎯 Roadmap

- [ ] Add transaction history within Mini App
- [ ] Implement QR code scanning for addresses
- [ ] Integrate more Telegram-specific features
- [ ] Add tip templates and presets
- [ ] Implement recurring tips
- [ ] Add group tipping functionality
- [ ] Create Mini App analytics dashboard

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
