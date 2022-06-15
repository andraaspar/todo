import { Todo } from '../model/Todo'
import { TodoState } from '../model/TodoState'

export function makeDefaultTodo(): Todo {
	return new Todo({ name: '', state: TodoState.NEW })
}
