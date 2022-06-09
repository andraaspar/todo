export function getUrl() {
	return new URL(location.hash.slice(1), location.href)
}
