import { nameToMulti } from './nameToMulti'

const hasMultiRe = /^\s*-?\d+(?:\.\d*)?x\s/

export function incrementNameMulti(name: string): string {
	if (hasMultiRe.test(name)) {
		let multi = nameToMulti(name)
		if (multi < 0) multi--
		else multi++
		return name.replace(hasMultiRe, multi + 'x ')
	} else {
		return '2x ' + name
	}
}
