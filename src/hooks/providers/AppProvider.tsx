import {MoralisProvider} from "react-moralis";
import {ChakraProvider} from "@chakra-ui/react";
import {Provider as ReduxProvider} from "react-redux";

import React from "react";

import { store } from "state/store";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "constants/index";
import { theme } from "themes/index";

const AppProvider = ({children}:React.PropsWithChildren<any>) => {
  return (
    <ReduxProvider store={store}>
     <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </MoralisProvider>
    </ReduxProvider>
  );
}

export default AppProvider;
