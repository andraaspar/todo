import { getFocusableElements } from './getFocusableElements'

export function focusByIndex(index: number, start?: number, end?: number) {
	const item = getFocusableElements()[index]
	if (item instanceof HTMLElement) {
		item.focus()
	}
	if (item instanceof HTMLInputElement) {
		if (start != null && end != null) {
			item.setSelectionRange(start, end)
		}
	}
}
