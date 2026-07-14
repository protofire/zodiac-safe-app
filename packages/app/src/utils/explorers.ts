import { ETHERSCAN_API_KEY } from './constants.ts'
import { getRegistryChain } from '../chains/registry.ts'

// Chain explorer / Safe metadata is now driven by the Chain Registry at runtime
// (see src/chains/). This module is the stable accessor the rest of the app reads;
// its return shape is unchanged so existing consumers keep working.

export interface NetworkExplorerInfo {
  name: string
  url: string
  apiUrl: string
  apiKey?: string
  safeTransactionApi?: string
  safeUrl: string
  verifyUrl: string
}

export const getNetworkExplorerInfo = (chainId: number): NetworkExplorerInfo | undefined => {
  const chain = getRegistryChain(chainId)
  if (!chain) return
  return {
    name: chain.explorer.name,
    url: chain.explorer.url,
    apiUrl: chain.explorer.apiUrl,
    apiKey: ETHERSCAN_API_KEY,
    // null (FALLBACK chain without a tx-service) becomes undefined: the tx-service
    // feature is disabled for that chain rather than pointed at a wrong host.
    safeTransactionApi: chain.safeTransactionApi ?? undefined,
    safeUrl: chain.safeUrl,
    verifyUrl: chain.verifyContractUrl,
  }
}

export const getExplorerInfo = (chainId: number, hash: string) => {
  const explorerData = getNetworkExplorerInfo(chainId)
  if (!explorerData) return
  const type = hash.length > 42 ? 'tx' : 'address'
  return () => ({
    url: `${explorerData.url}/${type}/${hash}`,
    alt: explorerData.name,
  })
}
