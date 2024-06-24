import { NETWORK } from "./networks"

interface ExplorerData {
  networkExplorerName: string
  networkExplorerUrl: string
  networkExplorerApiUrl: string
  safeTransactionApi: string
  safeUrl: string
  explorerApiKey?: string
  verifyContractUrl: string
}

export const EXPLORERS_CONFIG: Record<NETWORK, ExplorerData> = {
  [NETWORK.MAINNET]: {
    networkExplorerName: "Etherscan",
    networkExplorerUrl: "https://etherscan.io",
    networkExplorerApiUrl: "https://api.etherscan.io/api",
    safeTransactionApi: "https://safe-transaction-mainnet.safe.global/",
    safeUrl: "https://app.safe.global/eth:",
    verifyContractUrl: "https://etherscan.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_ETHERSCAN_KEY ?? '',
  },
  [NETWORK.GOERLI]: {
    networkExplorerName: "Etherscan",
    networkExplorerUrl: "https://goerli.etherscan.io",
    networkExplorerApiUrl: "https://api-goerli.etherscan.io/api",
    safeTransactionApi: "https://safe-transaction-goerli.safe.global/",
    safeUrl: "https://app.safe.global/gor:",
    verifyContractUrl: "https://goerli.etherscan.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_GNOSISSCAN_KEY ?? '',
  },
  [NETWORK.GNOSIS_CHAIN]: {
    networkExplorerName: "GnosisScan",
    networkExplorerUrl: "https://gnosisscan.io",
    networkExplorerApiUrl: "https://api.gnosisscan.io/api",
    safeUrl: "https://app.safe.global/gno:",
    safeTransactionApi: "https://safe-transaction-gnosis-chain.safe.global/",
    verifyContractUrl: "https://gnosisscan.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_POLYGONSCAN_KEY ?? '',
  },
  [NETWORK.POLYGON]: {
    networkExplorerName: "Polygonscan",
    networkExplorerUrl: "https://polygonscan.com",
    networkExplorerApiUrl: "https://api.polygonscan.com/api",
    safeUrl: "https://app.safe.global/matic:",
    safeTransactionApi: "https://safe-transaction-polygon.safe.global/",
    verifyContractUrl: "https://polygonscan.com/verifyContract",
    explorerApiKey: process.env.REACT_APP_POLYGONSCAN_KEY ?? '',
  },
  [NETWORK.BSC]: {
    networkExplorerName: "Bscscan",
    networkExplorerUrl: "https://bscscan.com/",
    networkExplorerApiUrl: "https://api.bscscan.com/api",
    safeUrl: "https://app.safe.global/bsc:",
    safeTransactionApi: "https://safe-transaction-bsc.safe.global/",
    verifyContractUrl: "https://bscscan.com/verifyContract",
    explorerApiKey: process.env.REACT_APP_BSCSCAN_KEY ?? '',
  },
  [NETWORK.OPTIMISM]: {
    networkExplorerName: "Optimism",
    networkExplorerUrl: "https://optimistic.etherscan.io/",
    networkExplorerApiUrl: "https://api-optimistic.etherscan.io/api",
    safeTransactionApi: "https://safe-transaction-optimism.safe.global/",
    safeUrl: "https://app.safe.global/oeth:",
    verifyContractUrl: "https://optimistic.etherscan.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_OPTIMISTIC_ETHERSCAN_KEY ?? '',
  },
  [NETWORK.ARBITRUM]: {
    networkExplorerName: "Arbiscan",
    networkExplorerUrl: "https://arbiscan.io/",
    networkExplorerApiUrl: "https://api.arbiscan.io/api",
    safeTransactionApi: "https://safe-transaction-arbitrum.safe.global/",
    safeUrl: "https://app.safe.global/arb1:",
    verifyContractUrl: "https://arbiscan.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_ARBISCAN_KEY ?? '',
  },
  [NETWORK.AVALANCHE]: {
    networkExplorerName: "Snowtrace",
    networkExplorerUrl: "https://snowtrace.io/",
    networkExplorerApiUrl: "https://api.snowtrace.io/api",
    safeTransactionApi: "https://safe-transaction-avalanche.safe.global/",
    safeUrl: "https://app.safe.global/avax:",
    verifyContractUrl: "https://snowtrace.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_SNOWTRACE_KEY ?? '',
  },
  [NETWORK.SEPOLIA]: {
    networkExplorerName: "Etherscan",
    networkExplorerUrl: "https://sepolia.etherscan.io",
    networkExplorerApiUrl: "https://api-sepolia.etherscan.io/api",
    safeTransactionApi: "https://safe-transaction-sepolia.safe.global/",
    safeUrl: "https://app.safe.global/sep:",
    verifyContractUrl: "https://sepolia.etherscan.io/verifyContract",
    explorerApiKey: process.env.REACT_APP_ETHERSCAN_KEY ?? '',
  },
  [NETWORK.BASE]: {
    networkExplorerName: "Basescan",
    networkExplorerUrl: "https://basescan.org",
    networkExplorerApiUrl: "https://api.basescan.org/api",
    safeTransactionApi: "https://safe-transaction-base.safe.global",
    safeUrl: "https://app.safe.global/base:",
    verifyContractUrl: "https://basescan.org/verifyContract",
    explorerApiKey: process.env.REACT_APP_BASESCAN_KEY ?? '',
  },
  [NETWORK.MOONBEAM]: {
    networkExplorerName: "Moonbeam",
    networkExplorerUrl: "https://moonscan.io/",
    networkExplorerApiUrl: "https://api-moonbase.moonscan.io/api",
    safeTransactionApi: "https://transaction.moonbase.staging.multisig.moonbeam.network/",
    safeUrl: "https://moonbase.staging.multisig.moonbeam.network/home?safe=moonbase:",
    verifyContractUrl: "https://api-moonbase.moonscan.io/api/verifyContract",
    explorerApiKey: process.env.REACT_APP_MOONSCAN_KEY ?? '',
  },
  [NETWORK.MOONRIVER]: {
    networkExplorerName: "Moonriver",
    networkExplorerUrl: "https://goerli.linea.build/api",
    networkExplorerApiUrl: "https://api-testnet.lineascan.build/api",
    safeTransactionApi: "https://transaction-testnet.safe.linea.build/",
    safeUrl: "https://safe.linea.build/home?safe=linea-gor:",
    verifyContractUrl: "https://goerli.lineascan.build/verifyContract",
    explorerApiKey: process.env.REACT_APP_MOONSCAN_KEY ?? '',
  },
  [NETWORK.MOONBASE_ALPHA]: {
    networkExplorerName: "Moonbase Alpha",
    networkExplorerUrl: "https://moonbase.moonscan.io/",
    networkExplorerApiUrl: "https://api-moonbase.moonscan.io/api",
    safeTransactionApi: "https://transaction.moonbase.staging.multisig.moonbeam.network/",
    safeUrl: "https://moonbase.staging.multisig.moonbeam.network/home?safe=moonbase:",
    verifyContractUrl: "https://api-moonbase.moonscan.io/api/verifyContract",
    explorerApiKey: process.env.REACT_APP_MOONSCAN_KEY ?? '',
  },
  [NETWORK.LINEA_GOERLI]: {
    networkExplorerName: "Goerli Lineascan",
    networkExplorerUrl: "https://goerli.lineascan.build/",
    networkExplorerApiUrl: "https://api-testnet.lineascan.build/api",
    safeTransactionApi: "https://transaction-testnet.safe.linea.build/",
    safeUrl: "https://safe.linea.build/home?safe=linea-gor:",
    verifyContractUrl: "https://goerli.lineascan.build/verifyContract",
    explorerApiKey: process.env.REACT_APP_LINEASCAN_KEY ?? '',
  },
  [NETWORK.LINEA]: {
    networkExplorerName: "Lineascan",
    networkExplorerUrl: "https://lineascan.build/",
    networkExplorerApiUrl: "https://api.lineascan.build/api",
    safeTransactionApi: "https://transaction.safe.linea.build/",
    safeUrl: "https://safe.linea.build/home?safe=linea:",
    verifyContractUrl: "https://lineascan.build/verifyContract",
    explorerApiKey: process.env.REACT_APP_LINEASCAN_KEY ?? '',
  },
  [NETWORK.LINEA_SEPOLIA]: {
    networkExplorerName: "Sepolia Lineascan",
    networkExplorerUrl: "https://sepolia.lineascan.build/",
    networkExplorerApiUrl: "https://api-sepolia.lineascan.build/api",
    safeTransactionApi: "https://transaction-sepolia.safe.linea.build/",
    safeUrl: "https://safe.linea.build/home?safe=linea-sepolia:",
    verifyContractUrl: "https://sepolia.lineascan.build/verifyContract",
    explorerApiKey: process.env.REACT_APP_LINEASCAN_KEY ?? '',
  },
  [NETWORK.AMOY]: {
    networkExplorerName: "Polygonscan Amoy Testnet",
    networkExplorerUrl: "https://amoy.polygonscan.com/",
    networkExplorerApiUrl: "https://api-amoy.polygonscan.com/api",
    safeTransactionApi: "https://transaction-testnet.polygon-test.safe.protofire.io/",
    safeUrl: "https://polygon-test.safe.protofire.io/home?safe=polygonamoy:",
    verifyContractUrl: "https://amoy.polygonscan.com/verifyContract",
    explorerApiKey: process.env.REACT_APP_LINEASCAN_KEY ?? '',
  },
}

export const getNetworkExplorerInfo = (chainId: number) => {
  const networkBaseConfig = EXPLORERS_CONFIG[chainId as NETWORK]
  if (!networkBaseConfig) return
  return {
    name: networkBaseConfig.networkExplorerName,
    url: networkBaseConfig.networkExplorerUrl,
    apiUrl: networkBaseConfig.networkExplorerApiUrl,
    apiKey: networkBaseConfig.explorerApiKey,
    safeTransactionApi: networkBaseConfig.safeTransactionApi,
    safeUrl: networkBaseConfig.safeUrl,
    verifyUrl: networkBaseConfig.verifyContractUrl,
  }
}

export const getExplorerInfo = (chainId: number, hash: string) => {
  const explorerData = getNetworkExplorerInfo(chainId)
  if (!explorerData) return
  const type = hash.length > 42 ? "tx" : "address"
  return () => ({
    url: `${explorerData.url}/${type}/${hash}`,
    alt: explorerData.name,
  })
}
