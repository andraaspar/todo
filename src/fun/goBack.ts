export function goBack() {
	history.back()
	window.dispatchEvent(new HashChangeEvent('hashchange'))
}
