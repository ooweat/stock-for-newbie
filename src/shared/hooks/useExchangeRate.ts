import { useEffect, useState } from 'react'

const CACHE_KEY = 'usd-krw-rate'

const CACHE_TIME_KEY =
  'usd-krw-rate-time'

const CACHE_DURATION =
  1000 * 60 * 5

const DEFAULT_RATE = 1380

export default function useExchangeRate() {
  const [rate, setRate] =
    useState(DEFAULT_RATE)

  const [updatedAt, setUpdatedAt] =
    useState<number | null>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const cachedRate =
          localStorage.getItem(
            CACHE_KEY,
          )

        const cachedTime =
          localStorage.getItem(
            CACHE_TIME_KEY,
          )

        const now = Date.now()

        // 캐시 사용
        if (
          cachedRate &&
          cachedTime &&
          now - Number(cachedTime) <
            CACHE_DURATION
        ) {
          setRate(Number(cachedRate))

          setUpdatedAt(
            Number(cachedTime),
          )

          setLoading(false)

          return
        }

        // 신규 호출
        const response = await fetch(
          '/exchange-api/latest?from=USD&to=KRW',
        )

        if (!response.ok) {
          throw new Error(
            '환율 조회 실패',
          )
        }

        const data =
          await response.json()

        const nextRate =
          data.rates.KRW

        setRate(nextRate)

        setUpdatedAt(now)

        // 캐시 저장
        localStorage.setItem(
          CACHE_KEY,
          String(nextRate),
        )

        localStorage.setItem(
          CACHE_TIME_KEY,
          String(now),
        )
      } catch (error) {
        console.error(error)

        // fallback
        const cachedRate =
          localStorage.getItem(
            CACHE_KEY,
          )

        const cachedTime =
          localStorage.getItem(
            CACHE_TIME_KEY,
          )

        if (cachedRate) {
          setRate(Number(cachedRate))
        }

        if (cachedTime) {
          setUpdatedAt(
            Number(cachedTime),
          )
        }
      } finally {
        setLoading(false)
      }
    }

    fetchRate()
  }, [])

  return {
    rate,
    updatedAt,
    loading,
  }
}
