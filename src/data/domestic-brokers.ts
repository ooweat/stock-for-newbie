import type {Broker} from '../entities/broker/types'

export const domesticBrokers: Broker[] = [
  {
    id: 'kis',
    name: '한국투자증권',
    market: 'KR',

    buyFeeRate: 0.00014,
    sellFeeRate: 0.00014,

    taxRate: 0.0023,
  },

  {
    id: 'kiwoom',
    name: '키움증권',
    market: 'KR',

    buyFeeRate: 0.00015,
    sellFeeRate: 0.00015,

    taxRate: 0.0023,
  },

  {
    id: 'nh',
    name: 'NH투자증권',
    market: 'KR',

    buyFeeRate: 0.000163,
    sellFeeRate: 0.000163,

    taxRate: 0.0023,
  },
]
