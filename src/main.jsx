import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TonConnectProvider from "./components/TonConnectProvider";
import SiteLayout from "./components/SiteLayout";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TonConnectProvider>
      <SiteLayout>
        <App />
      </SiteLayout>
    </TonConnectProvider>
  </StrictMode>
);
