import { config } from 'dotenv'

export interface Config {
  MAINNET: boolean,
  PRIVATE_KEY: string
}

config()

const parsedConfig: Config = {
  MAINNET: process.env.MAINNET === "true",
  PRIVATE_KEY: process.env.PRIVATE_KEY || ''
};

export default parsedConfig;