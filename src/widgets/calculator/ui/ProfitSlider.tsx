interface Props {
  value: number
  onChange: (value: number) => void
}

export default function ProfitSlider({
  value,
  onChange,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-5">
        <div className="mb-2 text-sm text-gray-500">
          예상 수익률
        </div>

        <div className="text-center text-3xl font-bold text-primary">
          {value > 0 ? '+' : ''}
          {value}%
        </div>
      </div>

      <input
        type="range"
        min={-100}
        max={100}
        step={1}
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-400">
        <span>-100%</span>
        <span>0%</span>
        <span>+100%</span>
      </div>
    </div>
  )
}
