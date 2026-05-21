interface Params {
  amount: number
  profitRate: number

  buyFeeRate: number
  sellFeeRate: number

  exchangeFeeRate?: number
}

export interface FeeResult {
  buyFee: number
  sellFee: number

  tax: number

  exchangeFee: number

  totalFee: number

  profit: number
  finalProfit: number
}

export function calculateUsFee({
                                 amount,
                                 profitRate,

                                 buyFeeRate,
                                 sellFeeRate,

                                 exchangeFeeRate = 0,
                               }: Params): FeeResult {
  const sellAmount =
      amount * (1 + profitRate / 100)

  const buyFee = amount * buyFeeRate

  const sellFee =
      sellAmount * sellFeeRate

  const exchangeFee =
      amount * exchangeFeeRate

  const totalFee =
      buyFee +
      sellFee +
      exchangeFee

  const profit = sellAmount - amount

  const finalProfit = profit - totalFee
  return {
    buyFee,
    sellFee,

    tax: 0,

    exchangeFee,

    totalFee,

    profit,
    finalProfit,
  }
}
