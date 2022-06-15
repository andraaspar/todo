import { getNoError } from '../fun/getNoError'
import { makeDefaultTodoLists } from '../fun/makeDefaultTodoLists'
import { ITodo, Todo } from './Todo'
import { ITodoList, TodoList } from './TodoList'

const OLD_KEY = 'TodoStore'
const NEW_KEY = 'todoLists'

interface IOldTodoStore {
	todosById: { [k: string]: ITodo }
	todoOrder: string[]
}

let todoLists: TodoList[] =
	getNoError<TodoList[]>(
		() => hydrateTodoLists(JSON.parse(localStorage[NEW_KEY]) as ITodoList[]),
		() => convertTodos(),
	) ?? makeDefaultTodoLists()

function hydrateTodoLists(lists: ITodoList[]): TodoList[] {
	return lists.map(
		(list) =>
			new TodoList({
				...list,
				todos: list.todos.map((todo) => new Todo(todo)),
			}),
	)
}

function convertTodos(): TodoList[] {
	// localStorage['TodoStore']=`{"todosById":{"foo":{"id":"foo","name":"FOO","state":"NEW"},"bar":{"id":"bar","name":"BAR","state":"DONE"},"baz":{"id":"baz","name":"BAZ","state":"FAILED"}},"todoOrder":["foo","bar","baz"]}`
	const oldTodoStore = JSON.parse(localStorage[OLD_KEY]) as IOldTodoStore
	const result: TodoList[] = [
		new TodoList({
			name: 'Todos',
			todos: oldTodoStore.todoOrder.map(
				(id) => new Todo(oldTodoStore.todosById[id]),
			),
		}),
	]
	localStorage[NEW_KEY] = JSON.stringify(result)
	delete localStorage[OLD_KEY]
	return result
}

export function getTodoLists() {
	return todoLists
}

export function saveTodoLists(newTodoLists: TodoList[] = getTodoLists()) {
	todoLists = newTodoLists
	localStorage[NEW_KEY] = JSON.stringify(todoLists)
}
