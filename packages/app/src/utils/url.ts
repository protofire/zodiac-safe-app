import { SafeInfo } from "@gnosis.pm/safe-apps-sdk"
import { NETWORKS_SUPPORTED_BY_PROTOFIRE, getShortName } from "./networks"
import { PROTOFIRE_ROLES_V1_URL, PROTOFIRE_ROLES_V2_URL } from "./constants.ts"

export function safeAppUrl(safeInfo: SafeInfo, appUrl: string) {
  const base = "https://gnosis-safe.io"
  const prefix = chainPrefix(safeInfo)
  const pathname = `/app/${prefix}:${safeInfo.safeAddress}/apps`
  const params = new URLSearchParams({ appUrl })

  return new URL(`${base}${pathname}?${params}`).href
}

export function rolesV1AppUrl(safeInfo: SafeInfo, rolesAddress: string) {
  const base =
    NETWORKS_SUPPORTED_BY_PROTOFIRE.includes(safeInfo.chainId)
      ? PROTOFIRE_ROLES_V1_URL
      : 'https://roles-v1.gnosisguild.org'
  const prefix = chainPrefix(safeInfo)

  return new URL(`${base}/#/${prefix}:${rolesAddress}`).href
}

export function rolesV2AppUrl(safeInfo: SafeInfo, rolesAddress: string) {
  const base =
    NETWORKS_SUPPORTED_BY_PROTOFIRE.includes(safeInfo.chainId)
      ? PROTOFIRE_ROLES_V2_URL
      : 'https://roles.gnosisguild.org'
  const prefix = chainPrefix(safeInfo)

  if (base === "") return undefined

  return new URL(`${base}/${prefix}:${rolesAddress}`).href
}

function chainPrefix(safeInfo: SafeInfo): string {
  return getShortName(safeInfo.chainId)
}
