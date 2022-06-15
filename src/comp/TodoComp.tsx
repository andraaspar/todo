import { createElement, render, TRenderJSX } from 'matul'
import { focusByIndex } from '../fun/focusByIndex'
import { getFocusIndex } from '../fun/getFocusIndex'
import { incrementNameMulti } from '../fun/incrementNameMulti'
import { makeDefaultTodo } from '../fun/makeDefaultTodo'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { Todo } from '../model/Todo'
import { TodoList } from '../model/TodoList'
import { getTodoLists, saveTodoLists } from '../model/todoLists'
import { TodoState, TodoStates } from '../model/TodoState'
import { Icon } from './Icon'
import { IconComp } from './IconComp'

export interface TodoCompProps {
	id: string
	index: number
	todoList: TodoList
}
export interface TodoCompState {
	wasEmpty: boolean
	wasEdge: boolean
	nameInRef: HTMLInputElement
}

export const TodoComp: TRenderJSX<TodoCompProps, TodoCompState> = (_, v) => {
	v.state.wasEmpty = v.state.wasEmpty ?? false
	v.state.wasEdge = v.state.wasEdge ?? false
	const todoList = v.props.todoList
	const index = v.props.index
	const todo = todoList.todos[index]
	return (
		<form
			className='to-todo'
			onsubmit={async (e: SubmitEvent) => {
				e.preventDefault()
				const target = document.activeElement
				if (
					target instanceof HTMLInputElement &&
					target.classList.contains('to-todo--name')
				) {
					const prevItem = todoList.todos[index - 1]
					const todoNameEmpty = todo.name.trim() === ''
					if (todoNameEmpty || (prevItem && prevItem.name.trim() === '')) {
						const todoLists = getTodoLists()
						const listIndex = todoLists.indexOf(todoList)
						const newListName = `List #${listIndex + 2}`
						todoLists.splice(
							listIndex + 1,
							0,
							new TodoList({
								name: newListName,
								todos: todoList.todos.slice(
									index +
										(todoNameEmpty && index < todoList.todos.length - 1
											? 1
											: 0),
								),
							}),
						)
						todoList.todos.length = todoNameEmpty ? index : index - 1
						if (todoList.todos.length === 0) {
							todoList.todos.push(makeDefaultTodo())
						}
						saveTodoLists()
						const focusIndex = getFocusIndex(v.state.nameInRef!)
						await render()
						focusByIndex(
							focusIndex + (todoNameEmpty ? 0 : -1),
							0,
							newListName.length,
						)
					} else {
						const value1 = target.value.slice(
							0,
							Math.min(
								target.selectionStart ?? 0,
								target.selectionEnd ?? target.value.length,
							),
						)
						const value2 = target.value.slice(
							Math.max(
								target.selectionStart ?? 0,
								target.selectionEnd ?? target.value.length,
							),
							target.value.length,
						)
						todo.name = value1
						todoList.todos.splice(
							v.props.index + 1,
							0,
							new Todo({
								name: value2,
								state: TodoState.NEW,
							}),
						)
						saveTodoLists()
						const focusIndex = getFocusIndex(v.state.nameInRef!)
						await render()
						focusByIndex(focusIndex + 1, 0, 0)
					}
				}
			}}
		>
			<button
				type='button'
				onclick={() => {
					const index = TodoStates.indexOf(todo.state)
					const newIndex = (index + 1) % TodoStates.length
					todo.state = TodoStates[newIndex]
					saveTodoLists()
					render()
				}}
			>
				<IconComp icon={todoStateToIcon(todo.state)} />
			</button>
			<input
				ref={(r: HTMLInputElement) => {
					v.state.nameInRef = r
				}}
				id={`list-${todoList.id}-input-${todo.id}`}
				className='to-todo--name'
				value={todo.name}
				autoComplete='off'
				oninput={function (this: HTMLInputElement) {
					todo.name = this.value
					saveTodoLists()
					render()
				}}
				onbeforeinput={async function (this: HTMLInputElement, e: InputEvent) {
					const input = e.data
					if (
						typeof input === 'string' &&
						input.length > 1 &&
						/\n|\r/.test(input)
					) {
						e.preventDefault()
						const arr = input.split(/[\r\n]+/g)
						let focusStart: number | undefined = undefined
						const start = Math.min(
							this.selectionStart ?? 0,
							this.selectionEnd ?? 0,
						)
						const end = Math.max(
							this.selectionStart ?? todo.name.length,
							this.selectionEnd ?? todo.name.length,
						)
						const last = todo.name.slice(end)
						todo.name = todo.name.slice(0, start) + arr[0]

						for (let i = 1; i < arr.length; i++) {
							const name = i + 1 === arr.length ? arr[i] + last : arr[i]
							focusStart = arr[i].length
							const index = v.props.index + i
							const id = crypto.randomUUID()
							todoList.todos.splice(
								index,
								0,
								new Todo({
									name: name,
									state: TodoState.NEW,
								}),
							)
						}
						saveTodoLists()
						const focusIndex = getFocusIndex(v.state.nameInRef!)
						await render()
						focusByIndex(focusIndex + arr.length - 1, focusStart, focusStart)
					}
				}}
				onkeydown={function (this: HTMLInputElement, e: KeyboardEvent) {
					v.state.wasEmpty = this.value === ''
					if (e.key === 'Backspace') {
						v.state.wasEdge =
							Math.max(
								this.selectionStart ?? 0,
								this.selectionEnd ?? this.value.length,
							) === 0
						if (v.state.wasEdge) {
							e.preventDefault()
						}
					} else if (e.key === 'Delete') {
						v.state.wasEdge =
							Math.min(
								this.selectionStart ?? 0,
								this.selectionEnd ?? this.value.length,
							) === this.value.length
						if (v.state.wasEdge) {
							e.preventDefault()
						}
					} else if (e.key === 'ArrowUp') {
						e.preventDefault()
					} else if (e.key === 'ArrowDown') {
						e.preventDefault()
					}
				}}
				onkeyup={async function (this: HTMLInputElement, e: KeyboardEvent) {
					if (e.key === 'Backspace') {
						if (v.state.wasEdge) {
							let prevNameEnd: number | undefined = undefined
							const todoLists = getTodoLists()
							const listIndex = todoLists.indexOf(todoList)
							if (index > 0) {
								const prevTodo = todoList.todos[index - 1]
								prevNameEnd = prevTodo.name.length
								prevTodo.name += todo.name
								todoList.todos.splice(index, 1)
								saveTodoLists()
								const focusIndex = getFocusIndex(v.state.nameInRef!)
								await render()
								focusByIndex(focusIndex - 1, prevNameEnd, prevNameEnd)
							} else if (listIndex > 0) {
								const prevList = todoLists[listIndex - 1]
								let focusIndex = getFocusIndex(v.state.nameInRef!)
								if (todoList.todos.length > 1 || todo.name.trim() !== '') {
									prevList.todos = [...prevList.todos, ...todoList.todos]
									prevNameEnd = 0
								} else {
									prevNameEnd = prevList.todos.at(-1)?.name.length || 0
									focusIndex--
								}
								todoLists.splice(listIndex, 1)
								saveTodoLists()
								await render()
								focusByIndex(focusIndex - 1, prevNameEnd, prevNameEnd)
							}
						}
					} else if (e.key === 'Delete') {
						if (v.state.wasEdge) {
							const origNameEnd: number = todo.name.length
							const index = v.props.index
							const todoLists = getTodoLists()
							const listIndex = todoLists.indexOf(todoList)
							if (index < todoList.todos.length - 1) {
								const nextTodo = todoList.todos[index + 1]
								todo.name += nextTodo.name
								todoList.todos.splice(index + 1, 1)
							} else if (listIndex < todoLists.length - 1) {
								const nextList = todoLists[listIndex + 1]
								if (
									nextList.todos.length > 1 ||
									nextList.todos[0].name.trim() !== ''
								) {
									todoList.todos = [...todoList.todos, ...nextList.todos]
								}
								todoLists.splice(listIndex + 1, 1)
							}
							saveTodoLists()
							await render()
							focusByIndex(
								getFocusIndex(v.state.nameInRef!),
								origNameEnd,
								origNameEnd,
							)
						}
					} else if (e.key === 'ArrowUp') {
						e.preventDefault()
						const start = this.selectionStart ?? 0
						focusByIndex(getFocusIndex(v.state.nameInRef!) - 1, start, start)
					} else if (e.key === 'ArrowDown') {
						e.preventDefault()
						const end = this.selectionEnd ?? this.value.length
						focusByIndex(getFocusIndex(v.state.nameInRef!) + 1, end, end)
					}
				}}
			/>
			<button
				type='button'
				onclick={() => {
					todo.name = incrementNameMulti(todo.name)
					render()
				}}
			>
				<IconComp icon={Icon.plus} />
			</button>
		</form>
	)
}
