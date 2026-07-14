// Browser-wired singleton over the testable registry store. This is the module the app
// imports; it supplies the real fetch/localStorage/clock, derives the embedding parent
// origin for safeUrl, and gates on the chains the Zodiac SDK has addresses for.
import { ContractVersions } from '@gnosis-guild/zodiac'
import { createRegistryStore } from './registryStore.ts'
import { buildFallback } from './fallback.ts'
import type { AppChain } from './deriveChain.ts'

export const REGISTRY_URL = 'https://registry.safe.protofire.io/api/v1/chains/'
const STORAGE_KEY = 'zodiac.chainRegistry'
const TIMEOUT_MS = 3000
const TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7d (safe-app cache TTL — see plan "Decisions")

/**
 * The embedding Safe UI's origin. The Zodiac app is always iframed inside the Safe UI
 * that owns the chain, so the parent frame origin is the correct base for safeUrl.
 */
const getParentOrigin = (): string => {
  try {
    const ancestors = window.location.ancestorOrigins
    if (ancestors && ancestors.length > 0) return ancestors[0]
    if (document.referrer) return new URL(document.referrer).origin
  } catch {
    /* fall through to own origin */
  }
  return window.location.origin
}

/** The Safe App gate: a registry chain is usable only if the SDK has Zodiac addresses for it. */
const gatedChainIds = new Set<number>(Object.keys(ContractVersions).map(Number))

const parentOrigin = getParentOrigin()

const store = createRegistryStore({
  fetchFn: (...args) => fetch(...args),
  storage: typeof localStorage !== 'undefined' ? localStorage : undefined,
  now: () => Date.now(),
  parentOrigin,
  registryUrl: REGISTRY_URL,
  timeoutMs: TIMEOUT_MS,
  ttlMs: TTL_MS,
  fallback: buildFallback(parentOrigin),
  gate: (chainId) => gatedChainIds.has(chainId),
  storageKey: STORAGE_KEY,
})

export const initRegistry = (): Promise<void> => store.init()
export const getRegistryChain = (chainId: number): AppChain | undefined => store.getChain(chainId)
export const getAllRegistryChains = (): AppChain[] => store.getAllChains()
export const getRegistrySource = () => store.getSource()
