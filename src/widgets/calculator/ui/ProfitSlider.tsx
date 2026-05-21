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
        <div className="mb-4 flex justify-between">
        <span className="text-sm text-gray-500">
          예상 수익률
        </span>

          <span className="font-semibold">
          {value}%
        </span>
        </div>

        <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) =>
                onChange(Number(e.target.value))
            }
            className="w-full"
        />
      </div>
  )
}
