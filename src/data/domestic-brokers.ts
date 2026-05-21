import type {Broker} from '../entities/broker/types'

export const domesticBrokers: Broker[] = [
  {
    id: 'kis',

    name: '한국투자증권',

    market: 'KR',

    baseFeeRate: 0.00014,

    eventFeeRate: 0.000063696,

    buyFeeRate: 0.000063696,
    sellFeeRate: 0.000063696,

    taxRate: 0.0023,

    hasEvent: true,

    note:
      '비대면 신규 고객 국내주식 우대 수수료',
  },

  {
    id: 'kiwoom',

    name: '키움증권',

    market: 'KR',

    baseFeeRate: 0.00015,

    eventFeeRate: 0.00015,

    buyFeeRate: 0.00015,
    sellFeeRate: 0.00015,

    taxRate: 0.0023,

    hasEvent: false,

    note:
      '국내주식 대표 HTS/MTS',
  },

  {
    id: 'nh',

    name: 'NH투자증권',

    market: 'KR',

    baseFeeRate: 0.000163,

    eventFeeRate: 0.00009,

    buyFeeRate: 0.00009,
    sellFeeRate: 0.00009,

    taxRate: 0.0023,

    hasEvent: true,

    note:
      '나무 비대면 우대 수수료',
  },

  {
    id: 'samsung',

    name: '삼성증권',

    market: 'KR',

    baseFeeRate: 0.000147,

    eventFeeRate: 0.000147,

    buyFeeRate: 0.000147,
    sellFeeRate: 0.000147,

    taxRate: 0.0023,

    hasEvent: false,

    note:
      '국내주식 이벤트 수수료 제한적',
  },

  {
    id: 'mirae',

    name: '미래에셋증권',

    market: 'KR',

    baseFeeRate: 0.00014,

    eventFeeRate: 0.00014,

    buyFeeRate: 0.00014,
    sellFeeRate: 0.00014,

    taxRate: 0.0023,

    hasEvent: false,

    note:
      '다이렉트 계좌 기준',
  },

  {
    id: 'toss-kr',

    name: '토스증권',

    market: 'KR',

    baseFeeRate: 0.00015,

    eventFeeRate: 0.00015,

    buyFeeRate: 0.00015,
    sellFeeRate: 0.00015,

    taxRate: 0.0023,

    hasEvent: false,

    note:
      '간편 투자 UX 중심',
  },

  {
    id: 'kakaopay-kr',

    name: '카카오페이증권',

    market: 'KR',

    baseFeeRate: 0.00015,

    eventFeeRate: 0.00015,

    buyFeeRate: 0.00015,
    sellFeeRate: 0.00015,

    taxRate: 0.0023,

    hasEvent: false,

    note:
      '카카오페이 연동 투자 서비스',
  },
]
