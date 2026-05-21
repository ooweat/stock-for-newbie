import type {Broker} from '../../../entities/broker/types'
import {calculateFee,} from '../../../shared/lib/calculateFee'

interface Props {
  broker: Broker

  amount: number
  profitRate: number

  isBest?: boolean
}

export default function BrokerCard({
                                     broker,
                                     amount,
                                     profitRate,
                                     isBest
                                   }: Props) {
  const result = calculateFee({
    amount,
    profitRate,

    buyFeeRate: broker.buyFeeRate,
    sellFeeRate: broker.sellFeeRate,

    taxRate: broker.taxRate,
  })

  return (
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        {
            isBest && (
                <div className="mb-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  최저 수수료
                </div>
            )
        }
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            {broker.name}
          </h2>

          <span className="text-sm text-gray-500">
          총 수수료
        </span>
        </div>

        <div className="mb-4 text-3xl font-bold text-primary">
          ₩ {Math.round(
            result.totalFee,
        ).toLocaleString()}
        </div>

        <div className="space-y-1 text-sm text-gray-600">
          <div>
            매수 수수료: {' '} ₩ {Math.round(
              result.buyFee,
          ).toLocaleString()}
          </div>

          <div>
            매도 수수료: {' '} ₩ {Math.round(
              result.sellFee,
          ).toLocaleString()}
          </div>

          <div>
            세금: {' '} ₩ {Math.round(
              result.tax,
          ).toLocaleString()}
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="mb-1 text-sm text-gray-500">
            실제 예상 수익
          </div>

          <div className="text-2xl font-bold text-primary">
            ₩ {Math.round(
              result.finalProfit,
          ).toLocaleString()}
          </div>
        </div>
      </div>
  )
}
