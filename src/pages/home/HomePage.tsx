import {useState} from 'react'

import MarketTabs from '../../widgets/calculator/ui/MarketTabs'
import AmountInput from '../../widgets/calculator/ui/AmountInput'
import ProfitSlider from '../../widgets/calculator/ui/ProfitSlider'
import BrokerCard from '../../widgets/calculator/ui/BrokerCard'

import {domesticBrokers} from '../../data/domestic-brokers'
import {calculateFee} from "../../shared/lib/calculateFee.ts";

export default function HomePage() {
  const [market, setMarket] = useState<'KR' | 'US'>(
      'KR',
  )

  const [amount, setAmount] = useState(10000000)

  const [profitRate, setProfitRate] = useState(5)

  const sortedBrokers = [...domesticBrokers].sort(
      (a, b) => {
        const aResult = calculateFee({
          amount,
          profitRate,

          buyFeeRate: a.buyFeeRate,
          sellFeeRate: a.sellFeeRate,

          taxRate: a.taxRate,
        })

        const bResult = calculateFee({
          amount,
          profitRate,

          buyFeeRate: b.buyFeeRate,
          sellFeeRate: b.sellFeeRate,

          taxRate: b.taxRate,
        })

        return aResult.totalFee - bResult.totalFee
      },
  )

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
          />

          <ProfitSlider
              value={profitRate}
              onChange={setProfitRate}
          />

          <div className="mt-4 flex flex-col gap-4">
            {sortedBrokers.map((broker, index) => (
                <BrokerCard
                    key={broker.id}
                    broker={broker}
                    amount={amount}
                    profitRate={profitRate}
                    isBest={index === 0}
                />
            ))}
          </div>
        </div>
      </main>
  )
}
