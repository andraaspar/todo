import { createElement, render, TRenderJSX } from 'matul'
import { makeDefaultTodo } from '../fun/makeDefaultTodo'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { TodoList } from '../model/TodoList'
import { getTodoLists, saveTodoLists } from '../model/todoLists'
import { TodoState, TodoStates } from '../model/TodoState'
import { IconComp } from './IconComp'

export interface TodoCompProps {
	id: string
	index: number
	todoList: TodoList
}
export interface TodoCompState {
	wasEmpty: boolean
	wasEdge: boolean
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
					if (
						todo.name.trim() === '' ||
						(prevItem && prevItem.name.trim() === '')
					) {
						const todoLists = getTodoLists()
						const listIndex = todoLists.indexOf(todoList)
						const newListId = crypto.randomUUID()
						todoLists.splice(listIndex + 1, 0, {
							id: newListId,
							name: `List #${listIndex + 2}`,
							todos: todoList.todos.slice(index),
						})
						todoList.todos.length = todo.name.trim() === '' ? index : index - 1
						if (todoList.todos.length === 0) {
							todoList.todos.push(makeDefaultTodo())
						}
						saveTodoLists()
						await render()
						const newInput = document.getElementById(
							`list-${newListId}-input-${todo.id}`,
						)
						if (newInput instanceof HTMLInputElement) {
							newInput.focus()
							newInput.setSelectionRange(0, 0)
						}
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
						const newTodoId = crypto.randomUUID()
						todo.name = value1
						todoList.todos.splice(v.props.index + 1, 0, {
							id: newTodoId,
							name: value2,
							state: TodoState.NEW,
						})
						saveTodoLists()
						await render()
						const newInput = document.getElementById(
							`list-${todoList.id}-input-${newTodoId}`,
						)
						if (newInput instanceof HTMLInputElement) {
							newInput.focus()
							newInput.setSelectionRange(0, 0)
						}
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
				id={`list-${todoList.id}-input-${todo.id}`}
				className='to-todo--name'
				value={todo.name}
				autoComplete='off'
				onchange={function (this: HTMLInputElement, e: Event) {
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
							todoList.todos.splice(index, 0, {
								id: id,
								name: name,
								state: TodoState.NEW,
							})
						}
						await render()
						focusByIndex(
							todoList,
							v.props.index + arr.length - 1,
							focusStart,
							focusStart,
						)
					}
				}}
				oninput={function (this: HTMLInputElement) {
					todo.name = this.value
					saveTodoLists()
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
								await render()
								focusByIndex(todoList, index - 1, prevNameEnd, prevNameEnd)
							} else if (listIndex > 0) {
								const prevList = todoLists[listIndex - 1]
								if (todo.name.trim() !== '' || todoList.todos.length > 1) {
									prevList.todos = [...prevList.todos, ...todoList.todos]
									prevNameEnd = 0
								} else {
									prevNameEnd = prevList.todos.at(-1)?.name.length || 0
								}
								todoLists.splice(listIndex, 1)
								saveTodoLists()
								await render()
								focusByIndex(
									prevList,
									prevList.todos.length - todoList.todos.length,
									prevNameEnd,
									prevNameEnd,
								)
							}
						}
					} else if (e.key === 'Delete') {
						if (v.state.wasEdge) {
							let origNameEnd: number | undefined = undefined
							const index = v.props.index
							if (index < todoList.todos.length - 1) {
								const nextTodo = todoList.todos[index + 1]
								origNameEnd = todo.name.length
								todo.name += nextTodo.name
								todoList.todos.splice(index + 1, 1)
								saveTodoLists()
							}
							await render()
							focusByIndex(todoList, index, origNameEnd, origNameEnd)
						}
					} else if (e.key === 'ArrowUp') {
						e.preventDefault()
						const start = this.selectionStart ?? 0
						focusByIndex(todoList, v.props.index - 1, start, start)
					} else if (e.key === 'ArrowDown') {
						e.preventDefault()
						const end = this.selectionEnd ?? this.value.length
						focusByIndex(todoList, v.props.index + 1, end, end)
					}
				}}
			/>
		</form>
	)
}

function focusByIndex(
	todoList: TodoList,
	index: number,
	start?: number,
	end?: number,
) {
	const id = todoList.todos[index]?.id
	if (id != null) {
		const input = document.getElementById(`list-${todoList.id}-input-${id}`)
		if (input instanceof HTMLInputElement) {
			input.focus()
			if (start != null && end != null) {
				input.setSelectionRange(start, end)
			}
		}
	}
}
