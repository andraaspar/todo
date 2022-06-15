const multiRe = /^\s*(-?\d+(?:\.\d*)?)x\s/

export function nameToMulti(name: string): number {
	return parseFloat(multiRe.exec(name)?.[1] || '1') || 0
}
