import { nameToValue } from '../fun/nameToValue'
import { TodoState } from './TodoState'

export interface ITodo {
	id: string
	name: string
	state: TodoState
}

export class Todo implements ITodo {
	id: string
	name: string
	state: TodoState

	constructor(o: { id?: string; name?: string; state?: TodoState }) {
		this.id = o.id ?? crypto.randomUUID()
		this.name = o.name ?? ''
		this.state = o.state ?? TodoState.NEW
	}

	get value(): number {
		if (this.state === TodoState.DONE) {
			return nameToValue(this.name)
		} else {
			return 0
		}
	}
}
