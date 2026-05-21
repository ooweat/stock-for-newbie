interface Params {
  amount: number
  profitRate: number

  buyFeeRate: number
  sellFeeRate: number

  taxRate?: number
}

export interface FeeResult {
  buyFee: number
  sellFee: number

  tax: number

  totalFee: number

  profit: number
  finalProfit: number
}

export function calculateFee({
  amount,
  profitRate,

  buyFeeRate,
  sellFeeRate,

  taxRate = 0,
}: Params): FeeResult {
  const sellAmount =
    amount * (1 + profitRate / 100)

  const buyFee = amount * buyFeeRate

  const sellFee =
    sellAmount * sellFeeRate

  const tax = sellAmount * taxRate

  const totalFee =
    buyFee + sellFee + tax

  const profit = sellAmount - amount

  const finalProfit = profit - totalFee

  return {
    buyFee,
    sellFee,
    tax,

    totalFee,

    profit,
    finalProfit,
  }
}
