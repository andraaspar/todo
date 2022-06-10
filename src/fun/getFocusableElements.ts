export function getFocusableElements(): HTMLElement[] {
	return Array.from(
		document.querySelectorAll(`.to-todo--name,.to-list__head__name-in`),
	)
}
