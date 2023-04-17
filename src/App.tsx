import React, { useState } from "react";
import { ConnectSample } from "./components/ConnectSample";
import { CW20TokensSample } from "./components/CW20TokensSample";
import { NetworkSample } from "./components/NetworkSample";
import { QuerySample } from "./components/QuerySample";
import { SignBytesSample } from "./components/SignBytesSample";
import { SignSample } from "./components/SignSample";
import { TxSample } from "./components/TxSample";
import { ChainSelector } from "./components/ChainSelector";

import { Grommet, grommet, Header, Page, PageContent, PageHeader, Text } from 'grommet';
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#228BE6',
      dark: '#333333',
      light: '#f8f8f8'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
});

const AppBar = (props: any) => (
 <Header
   background="brand"
   pad={{ left: "medium", right: "small", vertical: "small" }}
   elevation="medium"
   {...props}
 />
);

function App() {
  
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <ChainSelector>
        <Page>
          <AppBar>
            <Text size="large">Terra Payment Pages</Text>
          </AppBar>
          <PageContent>
            <PageHeader title="Terra Payment Pages" />
            <ConnectSample />
            <QuerySample />
            <TxSample />
            <SignSample />
            <SignBytesSample />
            <CW20TokensSample />
            <NetworkSample />
          </PageContent>
        </Page>
      </ChainSelector>
    </Grommet>
  );
}

export default App;
