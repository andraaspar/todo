import { throttle } from 'lodash'
import { Store } from 'pullstate'
import { Todo } from '../model/Todo'

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
	let store: ITodoStore = {
		todosById: {},
		todoOrder: [],
	}
	try {
		store = JSON.parse(localStorage.getItem(LS_KEY)!) ?? store
	} catch (e) {
		console.error(e)
	}
	return store
}
