import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
