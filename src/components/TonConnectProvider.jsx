import { useState, useEffect } from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function TonConnectProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <TonConnectUIProvider manifestUrl="https://ton-tipjar.vercel.app/tonconnect-manifest.json">
      {mounted && children}
    </TonConnectUIProvider>
  );
}
