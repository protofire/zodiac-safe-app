import { NETWORK } from './networks.ts'

export const IS_PRODUCTION = import.meta.env.VITE_IS_PRODUCTION === 'true'

export const INFURA_API_KEY = import.meta.env.VITE_INFURA_ID
export const ETHERSCAN_API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY

const PROTOFIRE_ROLES_V1_URL_PROD = 'https://zodiac-roles.safe.protofire.io'
const PROTOFIRE_ROLES_V1_URL_STAGING = 'https://stg-zodiac-roles.safe.protofire.io'

// TODO: needs to be deployed
const PROTOFIRE_ROLES_V2_URL_PROD = '' // 'https://zodiac-roles-v2.safe.protofire.io'
const PROTOFIRE_ROLES_V2_URL_STAGING = '' // 'https://stg-zodiac-roles-v2.safe.protofire.io'

export const PROTOFIRE_ROLES_V2_URL = IS_PRODUCTION ? PROTOFIRE_ROLES_V2_URL_PROD : PROTOFIRE_ROLES_V2_URL_STAGING
export const PROTOFIRE_ROLES_V1_URL = IS_PRODUCTION ? PROTOFIRE_ROLES_V1_URL_PROD : PROTOFIRE_ROLES_V1_URL_STAGING

/** @see https://docs.connext.network/resources/deployments */
export const ConnextDiamondAddresses: Record<number, string> = {
  [NETWORK.MAINNET]: '0x8898B472C54c31894e3B9bb83cEA802a5d0e63C6',
  [NETWORK.OPTIMISM]: '0x8f7492DE823025b4CfaAB1D34c58963F2af5DEDA',
  [NETWORK.POLYGON]: '0x11984dc4465481512eb5b777E44061C158CF2259',
  [NETWORK.ARBITRUM]: '0xEE9deC2712cCE65174B561151701Bf54b99C24C8',
  [NETWORK.BSC]: '0xCd401c10afa37d641d2F594852DA94C700e4F2CE',
  [NETWORK.GNOSIS_CHAIN]: '0x5bB83e95f63217CDa6aE3D181BA580Ef377D2109',
  [NETWORK.LINEA]: '0xa05eF29e9aC8C75c530c2795Fa6A800e188dE0a9',
  [NETWORK.BASE]: '0xB8448C6f7f7887D36DcA487370778e419e9ebE3F',
  [NETWORK.SEPOLIA]: '0x445fbf9cCbaf7d557fd771d56937E94397f43965',
  // Metis https://docs.connext.network/resources/deployments#metis
  [1088]: '0x6B142227A277CE62808E0Df93202483547Ec0188',
  // Mode https://docs.connext.network/resources/deployments#mode
  [34443]: '0x7380511493DD4c2f1dD75E9CCe5bD52C787D4B51',
  // XLayer https://docs.connext.network/resources/deployments#xlayer
  [196]: '0x63A4fdD5184c6cCDF9c8e550c02bC815b687d7aC',
  // X1-Testnet https://docs.connext.network/resources/deployments#x1-testnet
  [195]: '0xDB8310cAa57B052ab270A573B512dc5644558f0A',
  // Arbitrum-Sepolia https://docs.connext.network/resources/deployments#arbitrum-sepolia
  [421614]: '0x1780Ac087Cbe84CA8feb75C0Fb61878971175eb8',
  // Optimism-Sepolia https://docs.connext.network/resources/deployments#optimism-sepolia
  [11155420]: '0x8247ed6d0a344eeae4edBC7e44572F1B70ECA82A',
}
