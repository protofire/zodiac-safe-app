import { SafeInfo } from "@gnosis.pm/safe-apps-sdk"
import { NETWORK, NETWORKS } from "./networks"

export function safeAppUrl(safeInfo: SafeInfo, appUrl: string) {
  const base = getBaseAppUrl(safeInfo)
  const prefix = chainPrefix(safeInfo)
  const pathname = `/app/${prefix}:${safeInfo.safeAddress}/apps`
  const params = new URLSearchParams({ appUrl })

  return new URL(`${base}${pathname}?${params}`).href
}

export function rolesV1AppUrl(safeInfo: SafeInfo, rolesAddress: string) {
  const base = getV1AppUrl(safeInfo)
  const prefix = chainPrefix(safeInfo)

  return new URL(`${base}/#/${prefix}:${rolesAddress}`).href
}

export function rolesV2AppUrl(safeInfo: SafeInfo, rolesAddress: string) {
  const base = getV2AppUrl(safeInfo)
  const prefix = chainPrefix(safeInfo)

  return new URL(`${base}/${prefix}:${rolesAddress}`).href
}

function chainPrefix(safeInfo: SafeInfo): string {
  return NETWORKS[safeInfo.chainId as NETWORK].shortName
}

const getBaseAppUrl = (safeInfo: SafeInfo): string | undefined => {
  const chainId = safeInfo.chainId as NETWORK
  switch (chainId) {
    case NETWORK.MAINNET:
    case NETWORK.GOERLI:
    case NETWORK.OPTIMISM:
    case NETWORK.GNOSIS_CHAIN:
    case NETWORK.POLYGON:
    case NETWORK.BSC:
    case NETWORK.ARBITRUM:
    case NETWORK.AVALANCHE:
    case NETWORK.SEPOLIA:
    case NETWORK.BASE:
    default:
      return "https://gnosis-safe.io"
  }
}

const getV1AppUrl = (safeInfo: SafeInfo): string | undefined => {
  const chainId = safeInfo.chainId as NETWORK
  switch (chainId) {
    case NETWORK.LINEA_GOERLI:
    case NETWORK.LINEA:
    case NETWORK.LINEA_SEPOLIA:
      return "https://stg-zodiac-roles.safe.protofire.io/"
    case NETWORK.MAINNET:
    case NETWORK.GOERLI:
    case NETWORK.OPTIMISM:
    case NETWORK.GNOSIS_CHAIN:
    case NETWORK.POLYGON:
    case NETWORK.BSC:
    case NETWORK.ARBITRUM:
    case NETWORK.AVALANCHE:
    case NETWORK.SEPOLIA:
    case NETWORK.BASE:
    default:
      return "https://roles-v1.gnosisguild.org"
  }
}

const getV2AppUrl = (safeInfo: SafeInfo): string | undefined => {
  const chainId = safeInfo.chainId as NETWORK
  switch (chainId) {
    case NETWORK.MAINNET:
    case NETWORK.GOERLI:
    case NETWORK.OPTIMISM:
    case NETWORK.GNOSIS_CHAIN:
    case NETWORK.POLYGON:
    case NETWORK.BSC:
    case NETWORK.ARBITRUM:
    case NETWORK.AVALANCHE:
    case NETWORK.SEPOLIA:
    case NETWORK.BASE:
    default:
      return "https://roles.gnosisguild.org"
  }
}
