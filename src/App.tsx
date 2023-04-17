import React from "react";
import styled from "styled-components";
import { ConnectSample } from "./components/ConnectSample";
import { CW20TokensSample } from "./components/CW20TokensSample";
import { NetworkSample } from "./components/NetworkSample";
import { QuerySample } from "./components/QuerySample";
import { SignBytesSample } from "./components/SignBytesSample";
import { SignSample } from "./components/SignSample";
import { TxSample } from "./components/TxSample";
import { ChainSelector } from "./components/ChainSelector";
import { Grommet } from 'grommet';

const Main = styled.main`
  margin: 20;
  display: "flex";
  flex-direction: "column";
  gap: 40;
`;

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Main>
        <ChainSelector>
          <ConnectSample />
          <QuerySample />
          <TxSample />
          <SignSample />
          <SignBytesSample />
          <CW20TokensSample />
          <NetworkSample />
        </ChainSelector>
      </Main>
    </Grommet>
  );
}

export default App;
