export interface Broker {
  id: string
  name: string

  market: 'KR' | 'US'

  buyFeeRate: number
  sellFeeRate: number

  taxRate?: number

  exchangeFeeRate?: number

  note?: string
}
