import "../styles/globals.css";
import { StoreProvider } from "../utlis/Store";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
