import { useState } from "react"
import { validationCredentials } from "../service/monitoring"
import { useSafeAppsSDK } from "@gnosis.pm/safe-apps-react-sdk"

export const useMonitoringValidation = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean | undefined>()
  const { safe } = useSafeAppsSDK()

  const execute = async (apiKey: string, apiSecret: string) => {
    setLoading(true)
    setError(undefined)
    try {
      await validationCredentials({
        apiKey,
        apiSecret,
        safe,
      }).then((res) => {
        setLoading(false)
        if (res.status === 200) {
          return setError(false)
        }
        setError(true)
      })
    } catch {
      setLoading(false)
    }
  }

  return { loading, error, execute }
}
