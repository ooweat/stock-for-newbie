import {useMemo} from 'react'
import {formatCurrency,} from '../../../shared/lib/formatCurrency'

interface Props {
  value: number
  onChange: (value: number) => void

  market?: 'KR' | 'US'

  currency: 'KRW' | 'USD'
  onCurrencyChange: (
      currency: 'KRW' | 'USD',
  ) => void

  exchangeRate: number
  updatedAt: number | null
  loading?: boolean
}

const QUICK_AMOUNTS = [
  1000000,
  5000000,
  10000000,
  50000000,
]

export default function AmountInput({
                                      value,
                                      onChange,
                                      market = 'KR',
                                      currency,
                                      onCurrencyChange,
                                      exchangeRate,
                                      updatedAt,
                                      loading
                                    }: Props) {
  const formattedValue = useMemo(() => {
    return value.toLocaleString()
  }, [value])

  const handleChange = (
      input: string,
  ) => {
    const onlyNumber =
        input.replace(/[^0-9]/g, '')

    onChange(Number(onlyNumber))
  }

  const convertedValue =
      currency === 'KRW'
          ? value / exchangeRate
          : value * exchangeRate

  return (
      <div
          className="
        rounded-3xl
        bg-white
        p-6
        shadow-sm
      "
      >
        <div className="mb-3 text-sm font-medium text-gray-500">
          매수금액
        </div>

        <div
            className="
          group
          flex
          items-end
          justify-between
          rounded-2xl
          border
          border-transparent
          border-b-gray-200
          pb-4
          transition-all
          duration-200

          focus-within:border-primary
          focus-within:bg-blue-50/30
        "
        >
          <input
              type="text"
              inputMode="numeric"
              value={formattedValue}
              onChange={(e) =>
                  handleChange(e.target.value)
              }
              className="
            w-full
            bg-transparent
            text-5xl
            font-bold
            tracking-tight
            outline-none

            caret-primary

            [appearance:textfield]

            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
          "
          />

          <span
              className="
            pb-2
            text-2xl
            font-semibold
            text-gray-400
            transition-colors

            group-focus-within:text-primary
          "
          >
          {currency === 'KRW'
              ? '원'
              : 'USD'}
        </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            {currency === 'KRW'
                ? `약 $${convertedValue.toFixed(
                    2,
                )}`
                : `약 ₩${convertedValue.toLocaleString()}`}
          </div>

          {market === 'US' && (
              <div
                  className="
                  rounded-lg
                  bg-gray-100
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-gray-500
                "
              >
                {loading
                    ? '환율 불러오는 중...'
                    : `1 USD = ${formatCurrency(
                        exchangeRate,
                    )}`} {
                  updatedAt && (
                      <div className="mt-2 text-xs text-gray-400">
                        환율 기준: {' '} {new Date(
                          updatedAt,
                      ).toLocaleTimeString('ko-KR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                      </div>
                  )}
              </div>
          )}
        </div>

        {
            market === 'US' && (
                <div className="mt-4 flex gap-2">
                  <button
                      onClick={() =>
                          onCurrencyChange(
                              currency === 'KRW'
                                  ? 'USD'
                                  : 'KRW',
                          )
                      }
                      className="
              rounded-xl
              border
              border-gray-200
              px-3
              py-2
              text-sm
              font-medium
              transition-colors

              hover:bg-gray-50
            "
                  >
                    {currency === 'KRW'
                        ? '원 ↔ USD'
                        : 'USD ↔ 원'}
                  </button>
                </div>
            )
        }

        <div className="mt-5 grid grid-cols-4 gap-2">
          {QUICK_AMOUNTS.map((amount) => (
              <button
                  key={amount}
                  onClick={() =>
                      onChange(value + amount)
                  }
                  className="
              rounded-xl
              bg-gray-100
              py-3
              text-sm
              font-semibold
              text-gray-700
              transition-all

              hover:bg-gray-200
              active:scale-95
            "
              >
                + {(amount / 10000).toLocaleString()} 만
              </button>
          ))}
        </div>
      </div>
  )
}
