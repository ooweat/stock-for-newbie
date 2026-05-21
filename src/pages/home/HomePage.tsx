import { useState } from 'react'

import MarketTabs from '../../widgets/calculator/ui/MarketTabs'
import AmountInput from '../../widgets/calculator/ui/AmountInput'
import ProfitSlider from '../../widgets/calculator/ui/ProfitSlider'

export default function HomePage() {
  const [market, setMarket] = useState<'KR' | 'US'>(
    'KR',
  )

  const [amount, setAmount] = useState(10000000)

  const [profitRate, setProfitRate] = useState(5)

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
      </div>
    </main>
  )
}
