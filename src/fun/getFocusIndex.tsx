import { getFocusableElements } from './getFocusableElements'

export function getFocusIndex(elem: HTMLElement): number {
	return getFocusableElements().indexOf(elem)
}
