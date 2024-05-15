import { NETWORK, NETWORK_API_URL_BASE } from "utils/networks"

interface RequestType {
  snapshotSpaceEnsName: string
  snapshotSpaceSettings: any
  chainId: number
}

interface Responds {
  cidV0: string
}

export const pinSnapshotSpace: (request: RequestType) => Promise<Responds> = async (
  request,
) => {
  const backendApiUrl = NETWORK_API_URL_BASE[request.chainId as NETWORK]
  const res = await fetch(backendApiUrl + "/ipfs-pinning/snapshot-settings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(request),
  })
  return res.json()
}
