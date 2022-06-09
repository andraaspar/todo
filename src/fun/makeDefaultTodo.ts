import { Todo } from '../model/Todo'
import { TodoState } from '../model/TodoState'

export function makeDefaultTodo(): Todo {
	return { id: crypto.randomUUID(), name: '', state: TodoState.NEW }
}
