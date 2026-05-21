export interface Broker {
  id: string

  name: string

  market: 'KR' | 'US'

  // 기본 수수료
  baseFeeRate: number

  // 이벤트 적용 수수료
  eventFeeRate: number

  // 현재 계산에 사용할 수수료
  buyFeeRate: number
  sellFeeRate: number

  // 환전 우대 후 체감 비용
  exchangeFeeRate?: number

  // 거래세
  taxRate?: number

  // 환율 우대율
  exchangeDiscountRate?: number

  // 이벤트 여부
  hasEvent?: boolean

  note?: string
}
