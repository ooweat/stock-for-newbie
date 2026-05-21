import {useState} from 'react'

import MarketTabs from '../../widgets/calculator/ui/MarketTabs'
import AmountInput from '../../widgets/calculator/ui/AmountInput'
import ProfitSlider from '../../widgets/calculator/ui/ProfitSlider'
import BrokerCard from '../../widgets/calculator/ui/BrokerCard'

import {domesticBrokers} from '../../data/domestic-brokers'
import {overseasBrokers} from '../../data/overseas-brokers'

import {calculateFee,} from '../../shared/lib/calculateFee'
import {calculateUsFee,} from '../../shared/lib/calculateUsFee'

import useExchangeRate
  from '../../shared/hooks/useExchangeRate'

export default function HomePage() {
  const [market, setMarket] = useState<'KR' | 'US'>(
      'KR',
  )

  const [amount, setAmount] = useState(10000000)

  const [profitRate, setProfitRate] = useState(10)

  const [feeViewType, setFeeViewType] =
      useState<'TOTAL' | 'FEE'>('TOTAL')

  const brokers =
      market === 'KR'
          ? domesticBrokers
          : overseasBrokers

  const [currency, setCurrency] =
      useState<'KRW' | 'USD'>('KRW')

  const sortedBrokers = [...brokers].sort(
      (a, b) => {
        const aResult =
            market === 'KR'
                ? calculateFee({
                  amount,
                  profitRate,

                  buyFeeRate:
                  a.buyFeeRate,

                  sellFeeRate:
                  a.sellFeeRate,

                  taxRate: a.taxRate,
                })
                : calculateUsFee({
                  amount,
                  profitRate,

                  buyFeeRate:
                  a.buyFeeRate,

                  sellFeeRate:
                  a.sellFeeRate,

                  exchangeFeeRate:
                  a.exchangeFeeRate,
                })

        const bResult =
            market === 'KR'
                ? calculateFee({
                  amount,
                  profitRate,

                  buyFeeRate:
                  b.buyFeeRate,

                  sellFeeRate:
                  b.sellFeeRate,

                  taxRate: b.taxRate,
                })
                : calculateUsFee({
                  amount,
                  profitRate,

                  buyFeeRate:
                  b.buyFeeRate,

                  sellFeeRate:
                  b.sellFeeRate,

                  exchangeFeeRate:
                  b.exchangeFeeRate,
                })

        return (
            aResult.totalFee -
            bResult.totalFee
        )
      },
  )

  const {rate, updatedAt, loading,} = useExchangeRate()

  return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto flex max-w-[480px] flex-col gap-4 px-4 py-10">
          <h1 className="text-center text-3xl font-bold">
            증권사 수수료 계산기
          </h1>

          <MarketTabs
              value={market}
              onChange={setMarket}
          />

          <AmountInput
            value={amount}
            onChange={setAmount}
            market={market}
            currency={currency}
            onCurrencyChange={setCurrency}
            exchangeRate={rate}
            updatedAt={updatedAt}
            loading={loading}
          />

          <ProfitSlider
              value={profitRate}
              onChange={setProfitRate}
          />

          <div className="mt-4">
            <div className="mb-3 text-xl font-bold">
              증권사별 비교
            </div>

            <div className="flex rounded-xl bg-white p-1 shadow-sm">
              <button
                  onClick={() =>
                      setFeeViewType('TOTAL')
                  }
                  className={`
                flex-1
                rounded-lg
                py-2
                text-sm
                font-semibold

                ${
                      feeViewType === 'TOTAL'
                          ? 'bg-primary text-white'
                          : 'text-gray-500'
                  }
              `}
              >
                총 비용
              </button>

              <button
                  onClick={() =>
                      setFeeViewType('FEE')
                  }
                  className={`
                flex-1
                rounded-lg
                py-2
                text-sm
                font-semibold

                ${
                      feeViewType === 'FEE'
                          ? 'bg-primary text-white'
                          : 'text-gray-500'
                  }
              `}
              >
                증권사 수수료만
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {sortedBrokers.map(
                (broker, index) => (
                    <BrokerCard
                        key={broker.id}
                        broker={broker}
                        amount={amount}
                        profitRate={profitRate}
                        isBest={index === 0}
                        feeViewType={feeViewType}
                    />
                ),
            )}
          </div>
        </div>
      </main>
  )
}
