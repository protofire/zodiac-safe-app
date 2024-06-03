export enum NETWORK {
  MAINNET = 1,
  GOERLI = 5,
  OPTIMISM = 10,
  BSC = 56,
  GNOSIS_CHAIN = 100,
  POLYGON = 137,
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  SEPOLIA = 11155111,
  BASE = 8453,
  MOONBEAM = 1284,
  MOONRIVER = 1285,
  MOONBASE_ALPHA = 1287,
}

export interface Coin {
  symbol: string
  decimals: number
}

interface Network {
  chainId: number
  name: string
  shortName: string
  nativeAsset: Coin
}

export const NATIVE_ASSET: Record<string, Coin> = {
  ETH: { symbol: "ETH", decimals: 18 },
  XDAI: { symbol: "xDai", decimals: 18 },
  MATIC: { symbol: "MATIC", decimals: 18 },
  BNB: { symbol: "BNB", decimals: 18 },
  AVAX: { symbol: "AVAX", decimals: 18 },
  GLMR: { symbol: "GLMR", decimals: 18 },
  MOVR: { symbol: "MOVR", decimals: 18 },
  DEV: { symbol: "DEV", decimals: 18 },
}

export const NETWORKS: Record<NETWORK, Network> = {
  [NETWORK.MAINNET]: {
    chainId: NETWORK.MAINNET,
    name: "mainnet",
    shortName: "eth",
    nativeAsset: NATIVE_ASSET.ETH,
  },
  [NETWORK.GOERLI]: {
    chainId: NETWORK.GOERLI,
    name: "goerli",
    shortName: "gor",
    nativeAsset: NATIVE_ASSET.ETH,
  },
  [NETWORK.OPTIMISM]: {
    chainId: NETWORK.OPTIMISM,
    name: "optimism",
    shortName: "oeth",
    nativeAsset: NATIVE_ASSET.ETH,
  },
  [NETWORK.GNOSIS_CHAIN]: {
    chainId: NETWORK.GNOSIS_CHAIN,
    name: "gnosis_chain",
    shortName: "gno",
    nativeAsset: NATIVE_ASSET.XDAI,
  },
  [NETWORK.BSC]: {
    chainId: NETWORK.BSC,
    name: "binance_smart_chain",
    shortName: "bnb",
    nativeAsset: NATIVE_ASSET.BNB,
  },
  [NETWORK.POLYGON]: {
    chainId: NETWORK.POLYGON,
    name: "polygon",
    shortName: "matic",
    nativeAsset: NATIVE_ASSET.MATIC,
  },
  [NETWORK.ARBITRUM]: {
    chainId: NETWORK.ARBITRUM,
    name: "arbitrum",
    shortName: "arb1",
    nativeAsset: NATIVE_ASSET.ETH,
  },
  [NETWORK.AVALANCHE]: {
    chainId: NETWORK.AVALANCHE,
    name: "avalanche",
    shortName: "avax",
    nativeAsset: NATIVE_ASSET.AVAX,
  },
  [NETWORK.SEPOLIA]: {
    chainId: NETWORK.SEPOLIA,
    name: "sepolia",
    shortName: "sep",
    nativeAsset: NATIVE_ASSET.ETH,
  },
  [NETWORK.BASE]: {
    chainId: NETWORK.BASE,
    name: "base",
    shortName: "base",
    nativeAsset: NATIVE_ASSET.ETH,
  },
  [NETWORK.MOONBEAM]: {
    chainId: NETWORK.MOONBEAM,
    name: "moonbeam",
    shortName: "glmr",
    nativeAsset: NATIVE_ASSET.GLMR,
  },
  [NETWORK.MOONRIVER]: {
    chainId: NETWORK.MOONRIVER,
    name: "moonriver",
    shortName: "movr",
    nativeAsset: NATIVE_ASSET.MOVR,
  },
  [NETWORK.MOONBASE_ALPHA]: {
    chainId: NETWORK.MOONBASE_ALPHA,
    name: "moonbase",
    shortName: "dev",
    nativeAsset: NATIVE_ASSET.DEV,
  },
}

export const NETWORK_NATIVE_ASSET: Record<NETWORK, Coin> = {
  [NETWORK.MAINNET]: NATIVE_ASSET.ETH,
  [NETWORK.GOERLI]: NATIVE_ASSET.ETH,
  [NETWORK.OPTIMISM]: NATIVE_ASSET.ETH,
  [NETWORK.GNOSIS_CHAIN]: NATIVE_ASSET.XDAI,
  [NETWORK.POLYGON]: NATIVE_ASSET.MATIC,
  [NETWORK.BSC]: NATIVE_ASSET.BNB,
  [NETWORK.ARBITRUM]: NATIVE_ASSET.ETH,
  [NETWORK.AVALANCHE]: NATIVE_ASSET.AVAX,
  [NETWORK.SEPOLIA]: NATIVE_ASSET.ETH,
  [NETWORK.BASE]: NATIVE_ASSET.ETH,
  [NETWORK.MOONBEAM]: NATIVE_ASSET.GLMR,
  [NETWORK.MOONRIVER]: NATIVE_ASSET.MOVR,
  [NETWORK.MOONBASE_ALPHA]: NATIVE_ASSET.DEV,
}

export const NETWORK_API_URL_BASE: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: "https://gnosis-safe.io",
  [NETWORK.GOERLI]: "https://gnosis-safe.io",
  [NETWORK.OPTIMISM]: "https://gnosis-safe.io",
  [NETWORK.GNOSIS_CHAIN]: "https://gnosis-safe.io",
  [NETWORK.POLYGON]: "https://gnosis-safe.io",
  [NETWORK.BSC]: "https://gnosis-safe.io",
  [NETWORK.ARBITRUM]: "https://gnosis-safe.io",
  [NETWORK.AVALANCHE]: "https://gnosis-safe.io",
  [NETWORK.SEPOLIA]: "https://gnosis-safe.io",
  [NETWORK.BASE]: "https://gnosis-safe.io",
  [NETWORK.MOONBEAM]: "https://gnosis-safe.io",
  [NETWORK.MOONRIVER]: "https://gnosis-safe.io",
  [NETWORK.MOONBASE_ALPHA]: "https://gnosis-safe.io",
}

export const NETWORK_MULTI_SEND_CONTRACT: Record<NETWORK, string> = {
  [NETWORK.MAINNET]: "",
  [NETWORK.GOERLI]: "",
  [NETWORK.OPTIMISM]: "",
  [NETWORK.GNOSIS_CHAIN]: "",
  [NETWORK.POLYGON]: "",
  [NETWORK.BSC]: "",
  [NETWORK.ARBITRUM]: "",
  [NETWORK.AVALANCHE]: "",
  [NETWORK.SEPOLIA]: "",
  [NETWORK.BASE]: "",
  [NETWORK.MOONBEAM]: "",
  [NETWORK.MOONRIVER]: "",
  [NETWORK.MOONBASE_ALPHA]: "",
}
