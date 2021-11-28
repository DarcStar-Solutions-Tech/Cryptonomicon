import { ColorModeScript } from "@chakra-ui/react";

import NextDocument, {Head, Html, Main, NextScript} from "next/document"
import { theme } from "themes/index";

export default class Document extends NextDocument{
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Cryptonomicon" />
          {/*<link rel="icon" href="/nuclear-nucleon.jpg" />*/}
        </Head>
        <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
