import { TodoList } from '../model/TodoList'

export function makeDefaultTodoLists(): TodoList[] {
	return [
		new TodoList({
			name: 'Todos',
		}),
	]
}
