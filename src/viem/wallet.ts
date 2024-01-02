import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { goerli, mainnet } from 'viem/chains'
import config from '../config';


export default () => {
  const account = privateKeyToAccount(`0x${config.PRIVATE_KEY}`) 

  const client = createWalletClient({
    account,
    chain: config.MAINNET ? mainnet : goerli,
    transport: http()
  })
  return client;
}