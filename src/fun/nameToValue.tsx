import { nameToMulti } from './nameToMulti'

const valueRe = /(?:^|\s)(-?\d+(?:\.\d+)?)\s*$/

export function nameToValue(name: string): number {
	const singleValue = parseFloat(valueRe.exec(name)?.[1] || '0') || 0
	const multi = nameToMulti(name)
	return singleValue * multi
}
