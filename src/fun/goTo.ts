import { model } from '../model/model'
import { isRoot } from './isRoot'

export function goTo(hash: string) {
	if (isRoot()) {
		model.rootScrollY = window.scrollY
	}
	location.hash = hash
	window.dispatchEvent(new HashChangeEvent('hashchange'))
}
