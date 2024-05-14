import { NETWORK } from "./networks"

export const getInfuraId = (chainId: number): string | undefined => {
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
      return process.env.REACT_APP_INFURA_ID
  }
}
