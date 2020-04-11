import { Icons_checkCircle, Icons_circle, Icons_xCircle } from '../comp/Icons'
import { TIcon } from '../comp/TIcon'
import { TodoState } from '../model/TodoState'

export function todoStateToIcon(s: TodoState): TIcon {
	switch (s) {
		case TodoState.NEW:
			return Icons_circle
		case TodoState.DONE:
			return Icons_checkCircle
		case TodoState.FAILED:
			return Icons_xCircle
	}
}
