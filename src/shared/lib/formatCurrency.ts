export function formatCurrency(
  value: number,
) {
  return `₩${Math.round(
    value,
  ).toLocaleString()}`
}

export function formatDollar(
  value: number,
) {
  return `$${value.toLocaleString()}`
}
