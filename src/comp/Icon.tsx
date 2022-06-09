import * as IconStrings from './IconStrings'

export const Icon = Object.fromEntries(
	Object.keys(IconStrings).map((key) => [key, key]),
) as { [Property in keyof typeof IconStrings]: Property }
