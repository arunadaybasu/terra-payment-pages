import { useWallet, WalletStatus } from '@terra-money/use-wallet';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function NetworkSample() {
  const { status, supportFeatures } = useWallet();

  return (
    <div>
      <h1>Network Sample</h1>
      {supportFeatures.has('network') ? (
        <Component />
      ) : status === WalletStatus.WALLET_CONNECTED ? (
        <p>This connection does not support Network commands</p>
      ) : (
        <p>Wallet not connected!</p>
      )}
    </div>
  );
}

const TEST_NETWORK = { 
  "ares-1": {
    "chainID": "rebel-2",
    "gasAdjustment": 5,
    "gasPrices": {
      "uaud": 0.95,
      "ucad": 0.95,
      "uchf": 0.7,
      "ucny": 4.9,
      "udkk": 4.5,
      "ueur": 0.625,
      "ugbp": 0.55,
      "uhkd": 5.85,
      "uidr": 10900,
      "uinr": 54.4,
      "ujpy": 81.85,
      "ukrw": 850,
      "uluna": 28.325,
      "umnt": 2142.855,
      "umyr": 3,
      "unok": 6.25,
      "uphp": 38,
      "usdr": 0.52469,
      "usek": 6.25,
      "usgd": 1,
      "uthb": 23.1,
      "utwd": 20,
      "uusd": 0.75
    },
    "icon": "https://station-assets.terraclassic.community/img/chains/Terra.svg",
    "isClassic": true,
    "lcd": "https://lcd.hexxagon.dev",
    "name": "Terra Classic",
    "prefix": "terra"
    // "ibc": {
    //   "toTerra": "channel-0",
    //   "fromTerra": "channel-189"
    // },
  }
}
function Component() {
  const { hasNetwork, addNetwork } = useWallet();

  const [networkExists, setNetworkExists] = useState<
    'exists' | 'not exists' | null
  >(null);

  const availableAdd = useMemo(() => {
    return networkExists === 'not exists';
  }, [networkExists]);

  useEffect(() => {
    hasNetwork(TEST_NETWORK).then((result) =>
      setNetworkExists(result ? 'exists' : 'not exists'),
    );
  }, [hasNetwork]);

  const add = useCallback(() => {
    addNetwork(TEST_NETWORK).then((result) =>
      setNetworkExists(result ? 'exists' : 'not exists'),
    );
  }, [addNetwork]);

  return (
    <div>
      <pre>Network exists: {networkExists}</pre>
      {availableAdd && <button onClick={add}>Add network</button>}
    </div>
  );
}
