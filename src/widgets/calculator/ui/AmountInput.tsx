interface Props {
  value: number
  onChange: (value: number) => void
}

export default function AmountInput({
  value,
  onChange,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-2 text-sm text-gray-500">
        매수금액
      </div>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className="w-full text-4xl font-bold outline-none"
      />
    </div>
  )
}
