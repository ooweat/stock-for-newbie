import { useState } from 'react'

import { ChevronDown } from 'lucide-react'

import type {Broker} from '../../../entities/broker/types'

import {
  calculateFee,
} from '../../../shared/lib/calculateFee'

import {
  calculateUsFee,
} from '../../../shared/lib/calculateUsFee'

import {
  formatCurrency,
} from '../../../shared/lib/formatCurrency'

interface Props {
  broker: Broker

  amount: number
  profitRate: number

  isBest?: boolean

  feeViewType: 'TOTAL' | 'FEE'
}

export default function BrokerCard({
  broker,
  amount,
  profitRate,
  isBest = false,
  feeViewType,
}: Props) {
  const [open, setOpen] = useState(false)

  const result =
    broker.market === 'KR'
      ? calculateFee({
          amount,
          profitRate,

          buyFeeRate:
            broker.buyFeeRate,

          sellFeeRate:
            broker.sellFeeRate,

          taxRate: broker.taxRate,
        })
      : calculateUsFee({
          amount,
          profitRate,

          buyFeeRate:
            broker.buyFeeRate,

          sellFeeRate:
            broker.sellFeeRate,

          exchangeFeeRate:
            broker.exchangeFeeRate,
        })

  const brokerFee =
    result.buyFee + result.sellFee

  const displayAmount =
    feeViewType === 'TOTAL'
      ? result.totalFee
      : brokerFee

  return (
    <div
      className={`
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition-all

        ${
          isBest
            ? 'border-2 border-primary'
            : 'border border-gray-100'
        }
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          p-5
          text-left
        "
      >
        {/* TOP */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            {isBest && (
              <div
                className="
                  mb-2
                  inline-flex
                  rounded-full
                  bg-primary/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-primary
                "
              >
                최저 비용
              </div>
            )}

            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">
                {broker.name}
              </h2>

              {broker.hasEvent && (
                <div
                  className="
                    rounded-full
                    bg-red-50
                    px-2
                    py-1
                    text-xs
                    font-semibold
                    text-red-500
                  "
                >
                  EVENT
                </div>
              )}
            </div>

            {broker.note && (
              <div className="mt-2 text-sm text-gray-500">
                {broker.note}
              </div>
            )}
          </div>

          <ChevronDown
            size={20}
            className={`
              mt-1
              text-gray-400
              transition-transform

              ${
                open
                  ? 'rotate-180'
                  : ''
              }
            `}
          />
        </div>

        {/* MAIN PRICE */}
        <div className="flex items-end justify-between">
          <div>
            <div className="mb-1 text-sm text-gray-400">
              {feeViewType === 'TOTAL'
                ? '총 비용'
                : '증권사 수수료'}
            </div>

            <div
              className="
                text-4xl
                font-bold
                tracking-tight
                text-primary
              "
            >
              {formatCurrency(
                displayAmount,
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-400">
              이벤트 수수료
            </div>

            <div className="text-lg font-bold text-red-500">
              {(
                broker.eventFeeRate * 100
              ).toFixed(3)}
              %
            </div>
          </div>
        </div>
      </button>

      {/* ACCORDION */}
      {open && (
        <div
          className="
            border-t
            bg-gray-50
            p-5
          "
        >
          {/* DETAIL FEES */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                매수 수수료
              </span>

              <span className="font-medium">
                {formatCurrency(
                  result.buyFee,
                )}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                매도 수수료
              </span>

              <span className="font-medium">
                {formatCurrency(
                  result.sellFee,
                )}
              </span>
            </div>

            {result.tax > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  증권거래세
                </span>

                <span className="font-medium">
                  {formatCurrency(
                    result.tax,
                  )}
                </span>
              </div>
            )}

            {result.exchangeFee > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  환전 수수료
                </span>

                <span className="font-medium">
                  {formatCurrency(
                    result.exchangeFee,
                  )}
                </span>
              </div>
            )}
          </div>

          {/* RESULT */}
          <div className="mt-6 rounded-2xl bg-white p-4">
            <div className="mb-1 text-sm text-gray-500">
              실제 예상 수익
            </div>

            <div
              className={`
                text-3xl
                font-bold

                ${
                  result.finalProfit >= 0
                    ? 'text-primary'
                    : 'text-red-500'
                }
              `}
            >
              {formatCurrency(
                result.finalProfit,
              )}
            </div>
          </div>

          {/* FEE INFO */}
          <div className="mt-6">
            <div className="mb-3 text-sm font-semibold text-gray-700">
              수수료 정보
            </div>

            <div
              className="
                rounded-2xl
                bg-white
                p-4
              "
            >
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    기본 수수료
                  </span>

                  <span className="font-medium">
                    {(
                      broker.baseFeeRate *
                      100
                    ).toFixed(3)}
                    %
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    이벤트 수수료
                  </span>

                  <span className="font-semibold text-primary">
                    {(
                      broker.eventFeeRate *
                      100
                    ).toFixed(3)}
                    %
                  </span>
                </div>

                {broker.exchangeDiscountRate && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      환율 우대
                    </span>

                    <span className="font-medium">
                      최대
                      {' '}
                      {
                        broker.exchangeDiscountRate
                      }
                      %
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* INFO */}
          <div
            className="
              mt-5
              rounded-2xl
              bg-blue-50
              p-4
              text-sm

              text-blue-700
            "
          >
            {broker.market === 'KR'
              ? '국내주식은 증권거래세가 포함됩니다.'
              : '해외주식은 환전 수수료가 포함됩니다.'}
          </div>
        </div>
      )}
    </div>
  )
}
