import { createPublicClient, http } from 'viem'
import { goerli, mainnet } from 'viem/chains'
import config from '../config';

export default () => createPublicClient({
  chain: config.MAINNET ? mainnet : goerli,
  transport: http(),
})