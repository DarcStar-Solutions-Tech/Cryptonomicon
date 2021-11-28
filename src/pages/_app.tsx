import type { AppProps } from "next/app";
import {DefaultLayout} from "components/layouts";

import "../styles/globals.css"
import AppProvider from "hooks/providers/AppProvider";

function CryptoApp({Component, pageProps}: AppProps){
  return (
    <AppProvider>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
    </AppProvider>
  );
}

export default CryptoApp;
