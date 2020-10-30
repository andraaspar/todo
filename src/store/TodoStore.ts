import { throttle } from 'lodash'
import { Store } from 'pullstate'
import { v4 } from 'uuid'
import { Todo } from '../model/Todo'
import { TodoState } from '../model/TodoState'

const LS_KEY = 'TodoStore'

export interface ITodoStore {
	todosById: { [k: string]: Todo }
	todoOrder: string[]
}

export const TodoStore = new Store<ITodoStore>(loadState())

TodoStore.subscribe(
	(s) => s,
	(draft, nu, old) => {
		saveStateThrottled()
	},
)

const saveStateThrottled = throttle(saveState, 600)

function saveState() {
	try {
		localStorage.setItem(LS_KEY, JSON.stringify(TodoStore.getRawState()))
	} catch (e) {
		console.error(e)
		alert(e)
	}
}

function loadState(): ITodoStore {
	let store = makeTodoStoreState()
	try {
		const parsed = JSON.parse(localStorage.getItem(LS_KEY)!) as
			| ITodoStore
			| undefined
			| null
		if (parsed && parsed.todoOrder.length) {
			store = parsed
		}
	} catch (e) {
		console.error(e)
	}
	return store
}

export function makeTodoStoreState(): ITodoStore {
	const id = v4()
	return {
		todosById: {
			[id]: {
				id: id,
				name: '',
				state: TodoState.NEW,
			},
		},
		todoOrder: [id],
	}
}
