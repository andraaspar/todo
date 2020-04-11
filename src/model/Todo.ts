import { TodoState } from './TodoState'

export interface Todo {
	id: string
	name: string
	state: TodoState
}
