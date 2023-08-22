import { useConnectedWallet, useLCDClient } from '@terra-money/wallet-provider';
import React, { useEffect, useState } from 'react';
import { useSelectedChain } from './ChainSelector';

export function QuerySample() {
  const lcd = useLCDClient();
  const connectedWallet = useConnectedWallet();
  const chainID = useSelectedChain();

  const [bank, setBank] = useState<null | string>();

  useEffect(() => {
    if (connectedWallet) {
      console.log(connectedWallet.addresses['rebel-2']);
      lcd.bank.balance(connectedWallet.addresses['rebel-2']).then((result) => {
        console.log(JSON.stringify(result));
        // setBank(coins.toString());
      });
    } else {
      setBank(null);
    }
  }, [connectedWallet, lcd, chainID]);


  return (
    <div>
      <h1>Query Sample</h1>
      {bank && <pre>{bank}</pre>}
      {!connectedWallet && <p>Wallet not connected!</p>}
    </div>
  );
}
