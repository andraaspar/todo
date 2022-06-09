import { TodoList } from '../model/TodoList'
import { makeDefaultTodo } from './makeDefaultTodo'

export function makeDefaultTodoLists(): TodoList[] {
	return [
		{
			id: crypto.randomUUID(),
			name: 'Todos',
			todos: [makeDefaultTodo()],
		},
	]
}
