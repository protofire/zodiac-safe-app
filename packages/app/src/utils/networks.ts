import { getRegistryChain } from '../chains/registry.ts'

export enum NETWORK {
  MAINNET = 1,
  GNOSIS_CHAIN = 100,
  GOERLI = 5,
  ARBITRUM = 42161,
  OPTIMISM = 10,
  POLYGON = 137,
  ZKEVM = 1101,
  AVALANCHE = 43114,
  BSC = 56,
  HARDHAT_NETWORK = 31337,
  LINEA = 59144,
  LINEA_GOERLI = 59140,
  SEPOLIA = 11155111,
  BASE = 8453,
  BASE_SEPOLIA = 84532,
  MANTLE = 5000,
  BERACHAIN = 80094,
  SONIC = 146,
  CELO = 42220,
  BOB = 60808,
  HYPER_EVM = 999,
  WORLD_CHAIN = 480,
  FLARE = 14,
  INK = 57073,
  HEMI = 43111,
  KATANA = 747474,
  LENS = 232,
  PEAQ = 3338,
  UNICHAIN = 130,
  ZKSYNC = 324,
  SCROLL = 534352,
  AURORA = 1313161554,
  GNOSIS_CHIADO = 10200,
  MOONBEAM = 1284,
  MOONRIVER = 1285,
  MOONBASE = 1287,
  LINEA_SEPOLIA = 59141,
  PLASMA = 9745,
  PLASMA_TESTNET = 9746,
  ZETACHAIN = 7000,
  ZETACHAIN_TESTNET = 7001,
  FLOW_EVM_MAINNET = 747,
  FLOW_EVM_TESTNET = 545,
  SHAPE = 360,
  SHAPE_SEPOLIA_TESTNET = 11011,
}

export interface Coin {
  symbol: string
  decimals: number
}

/**
 * Native currency for a chain, sourced from the Chain Registry at runtime.
 * Falls back to ETH/18 for the rare chain the registry/FALLBACK does not carry, so
 * callers that always expect a coin (Reality/Kleros bond wizards) keep working.
 */
export const getNativeAsset = (chainId: number): Coin =>
  getRegistryChain(chainId)?.nativeAsset ?? { symbol: 'ETH', decimals: 18 }

/** Chain shortName (e.g. `eth`), sourced from the Chain Registry; '' if unknown. */
export const getShortName = (chainId: number): string =>
  getRegistryChain(chainId)?.shortName ?? ''

export const NETWORKS_SUPPORTED_BY_PROTOFIRE: Array<NETWORK> = [
  NETWORK.MOONBEAM,
  NETWORK.MOONRIVER,
  NETWORK.MOONBASE,
  NETWORK.LINEA_SEPOLIA,
  NETWORK.PLASMA,
  NETWORK.PLASMA_TESTNET,
  NETWORK.ZETACHAIN,
  NETWORK.ZETACHAIN_TESTNET,
  NETWORK.FLOW_EVM_MAINNET,
  NETWORK.FLOW_EVM_TESTNET,
  NETWORK.SHAPE,
  NETWORK.SHAPE_SEPOLIA_TESTNET,
]

