import { makeDefaultTodo } from '../fun/makeDefaultTodo'
import { ITodo, Todo } from './Todo'

export interface ITodoList {
	id: string
	name: string
	todos: ITodo[]
}

export class TodoList {
	id: string
	name: string
	todos: Todo[]

	constructor(o: { id?: string; name?: string; todos?: Todo[] }) {
		this.id = o.id ?? crypto.randomUUID()
		this.name = o.name ?? ''
		this.todos = o.todos ?? [makeDefaultTodo()]
	}

	get value(): number {
		return this.todos.reduce((sum, todo) => sum + todo.value, 0)
	}
}
