import { Icon } from '../comp/Icon'
import { TIcon } from '../comp/TIcon'
import { TodoState } from '../model/TodoState'

export function todoStateToIcon(s: TodoState): TIcon {
	switch (s) {
		case TodoState.NEW:
			return Icon.circle
		case TodoState.DONE:
			return Icon.checkCircle
		case TodoState.FAILED:
			return Icon.xCircle
	}
}
