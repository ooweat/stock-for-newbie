import type {Broker} from '../entities/broker/types'

export const overseasBrokers: Broker[] = [
  {
    id: 'kiwoom-us',

    name: '키움증권',

    market: 'US',

    baseFeeRate: 0.0025,

    eventFeeRate: 0.0007,

    buyFeeRate: 0.0007,
    sellFeeRate: 0.0007,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 95,

    hasEvent: true,

    note:
      '미국주식 0.07% + 환율우대 최대 95%',
  },

  {
    id: 'mirae-us',

    name: '미래에셋증권',

    market: 'US',

    baseFeeRate: 0.0025,

    eventFeeRate: 0.0007,

    buyFeeRate: 0.0007,
    sellFeeRate: 0.0007,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 95,

    hasEvent: true,

    note:
      '90일 수수료 우대 이벤트',
  },

  {
    id: 'samsung-us',

    name: '삼성증권',

    market: 'US',

    baseFeeRate: 0.0025,

    eventFeeRate: 0.0003,

    buyFeeRate: 0.0003,
    sellFeeRate: 0.0003,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 95,

    hasEvent: true,

    note:
      '3개월 무료 이후 0.03%',
  },

  {
    id: 'kis-us',

    name: '한국투자증권',

    market: 'US',

    baseFeeRate: 0.0025,

    eventFeeRate: 0.0009,

    buyFeeRate: 0.0009,
    sellFeeRate: 0.0009,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 90,

    hasEvent: true,

    note:
      '해외주식 신규 고객 이벤트',
  },

  {
    id: 'nh-us',

    name: 'NH투자증권',

    market: 'US',

    baseFeeRate: 0.0025,

    eventFeeRate: 0.0009,

    buyFeeRate: 0.0009,
    sellFeeRate: 0.0009,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 90,

    hasEvent: true,

    note:
      '나무 해외주식 우대',
  },

  {
    id: 'toss-us',

    name: '토스증권',

    market: 'US',

    baseFeeRate: 0.001,

    eventFeeRate: 0.001,

    buyFeeRate: 0.001,
    sellFeeRate: 0.001,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 95,

    hasEvent: false,

    note:
      '간편 투자 UX 특화',
  },

  {
    id: 'kakaopay-us',

    name: '카카오페이증권',

    market: 'US',

    baseFeeRate: 0.0025,

    eventFeeRate: 0.0009,

    buyFeeRate: 0.0009,
    sellFeeRate: 0.0009,

    exchangeFeeRate: 0.0005,

    exchangeDiscountRate: 90,

    hasEvent: true,

    note:
      '해외주식 이벤트 수수료 적용',
  },
]
