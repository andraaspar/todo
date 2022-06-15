const format = new Intl.NumberFormat('en')

export function formatNumber(n: number) {
	return format.format(n)
}
