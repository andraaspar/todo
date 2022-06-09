export function getNoError<T>(...getters: (() => T)[]): T | undefined {
	for (const getter of getters) {
		try {
			return getter()
		} catch (e) {}
	}
}
