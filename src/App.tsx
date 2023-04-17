import React from "react";
import { ConnectSample } from "./components/ConnectSample";
import { CW20TokensSample } from "./components/CW20TokensSample";
import { NetworkSample } from "./components/NetworkSample";
import { QuerySample } from "./components/QuerySample";
import { SignBytesSample } from "./components/SignBytesSample";
import { SignSample } from "./components/SignSample";
import { TxSample } from "./components/TxSample";
import { ChainSelector } from "./components/ChainSelector";
import { Grommet, Header, Text } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props: any) => (
 <Header
   background="brand"
   pad={{ left: "medium", right: "small", vertical: "small" }}
   elevation="medium"
   {...props}
 />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <ChainSelector>
        <AppBar>
          <Text size="large">Terra Payment Pages</Text>
        </AppBar>
        <ConnectSample />
        <QuerySample />
        <TxSample />
        <SignSample />
        <SignBytesSample />
        <CW20TokensSample />
        <NetworkSample />
      </ChainSelector>
    </Grommet>
  );
}

export default App;
