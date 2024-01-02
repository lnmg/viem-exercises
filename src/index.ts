import { formatEther, getContract, Address } from 'viem'
import { normalize } from 'viem/ens'
import { wagmiAbi } from './abi'
import createViemClient from './utils/client'
import createViemWallet from './utils/wallet'

/*
  1. General chain info
  Ex 1.1 Get and log the following general info from the blockchain
    - chain id
    - chain name
    - chain native currency
    - current block number

  Ex 1.2 Get and log the balance from the address received as parameter

  Ex 1.3 Get and log all available data from block 42069n
*/
const generalInfoDemo = async (address: Address) => {

}

/*
  2. Interacting with contracts
  Ex 2.1 Get and log the contract total supply using the given address and ABI from ./abi.ts

  Ex 2.2 Get and log the hash of the first transaction submitted after block 15902010n
*/
const contractsDemo = async (contractAddress: Address, blockNumber: bigint) => {

}

/*
  3. ENS
  Ex 3.1 Get and log the address and avatar from the given ENS name
*/
const ensDemo = async (ensName: string) => {

}

/*
  4. Wallet interactions
  Ex 4.1. Get and log the following info from the wallet
    - chainId
    - Base address
    - Wallet type
    - Balance

  Ex 4.2. Sign the given message with the wallet

  Ex 4.3. Send 'value' wei from the wallet base address to the address passed as parameter 'to'.
*/
const walletDemo = async (to: Address, value: bigint) => {

}

const main = async () => {
  // Here we are going to execute the solutions all together
}

main();