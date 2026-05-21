interface Props {
  value: 'KR' | 'US'
  onChange: (value: 'KR' | 'US') => void
}

export default function MarketTabs({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-4 flex rounded-xl bg-gray-200 p-1">
      <button
        className={`flex-1 rounded-lg py-2 ${
          value === 'KR'
            ? 'bg-white font-semibold shadow'
            : ''
        }`}
        onClick={() => onChange('KR')}
      >
        국내주식
      </button>

      <button
        className={`flex-1 rounded-lg py-2 ${
          value === 'US'
            ? 'bg-white font-semibold shadow'
            : ''
        }`}
        onClick={() => onChange('US')}
      >
        해외주식
      </button>
    </div>
  )
}
