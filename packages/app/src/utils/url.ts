import { SafeInfo } from "@gnosis.pm/safe-apps-sdk"
import { NETWORK, NETWORKS } from "./networks"

export function safeAppUrl(safeInfo: SafeInfo, appUrl: string) {
  const base = "https://gnosis-safe.io"
  const prefix = chainPrefix(safeInfo)
  const pathname = `/app/${prefix}:${safeInfo.safeAddress}/apps`
  const params = new URLSearchParams({ appUrl })

  return new URL(`${base}${pathname}?${params}`).href
}

export function rolesAppUrl(safeInfo: SafeInfo, rolesAddress: string) {
  const base = "https://roles.zodiac.safe.linea.build/"
  const prefix = chainPrefix(safeInfo)

  return new URL(`${base}/#/${prefix}:${rolesAddress}`).href
}

function chainPrefix(safeInfo: SafeInfo): string {
  return NETWORKS[safeInfo.chainId as NETWORK].shortName
}
