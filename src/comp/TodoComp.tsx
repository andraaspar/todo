import React, { PropsWithChildren, useRef } from 'react'
import { v4 } from 'uuid'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { TodoState, TodoStates } from '../model/TodoState'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'

export interface TodoCompProps {
	id: string
	index: number
}

export function TodoComp(props: PropsWithChildren<TodoCompProps>) {
	const wasEmpty = useRef<boolean>(false)
	const wasEdge = useRef<boolean>(false)
	const todo = TodoStore.useState((s) => s.todosById[props.id])
	return (
		<form
			className='to-todo'
			onSubmit={(e) => {
				e.preventDefault()
				const target = document.activeElement
				if (
					target instanceof HTMLInputElement &&
					target.classList.contains('to-todo--name')
				) {
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
					const currentId = target.id.replace(/^input-/, '')
					const newId = v4()
					TodoStore.update((s) => {
						s.todosById[currentId].name = value1
						s.todosById[newId] = {
							id: newId,
							name: value2,
							state: TodoState.NEW,
						}
						s.todoOrder.splice(props.index + 1, 0, newId)
					})
					requestAnimationFrame(() => {
						const newInput = document.getElementById(`input-${newId}`)
						if (newInput instanceof HTMLInputElement) {
							newInput.focus()
							newInput.setSelectionRange(0, 0)
						}
					})
				}
			}}
		>
			<button
				type='button'
				onClick={(e) => {
					TodoStore.update((s) => {
						const todo = s.todosById[props.id]
						const index = TodoStates.indexOf(todo.state)
						const newIndex = (index + 1) % TodoStates.length
						todo.state = TodoStates[newIndex]
					})
				}}
			>
				<IconComp icon={todoStateToIcon(todo.state)} />
			</button>
			<input
				id={`input-${todo.id}`}
				className='to-todo--name'
				value={todo.name}
				autoComplete='off'
				onChange={(e) => {
					TodoStore.update((s) => {
						s.todosById[props.id].name = e.currentTarget.value
					})
				}}
				onKeyDown={(e) => {
					wasEmpty.current = e.currentTarget.value === ''
					if (e.key === 'Backspace') {
						wasEdge.current =
							Math.max(
								e.currentTarget.selectionStart ?? 0,
								e.currentTarget.selectionEnd ?? e.currentTarget.value.length,
							) === 0
						if (wasEdge.current) {
							e.preventDefault()
						}
					} else if (e.key === 'Delete') {
						wasEdge.current =
							Math.min(
								e.currentTarget.selectionStart ?? 0,
								e.currentTarget.selectionEnd ?? e.currentTarget.value.length,
							) === e.currentTarget.value.length
						if (wasEdge.current) {
							e.preventDefault()
						}
					} else if (e.key === 'ArrowUp') {
						e.preventDefault()
					} else if (e.key === 'ArrowDown') {
						e.preventDefault()
					}
				}}
				onKeyUp={(e) => {
					if (e.key === 'Backspace') {
						if (wasEdge.current) {
							let prevNameEnd: number | undefined = undefined
							TodoStore.update((s, o) => {
								const index = o.todoOrder.indexOf(todo.id)
								if (index > 0) {
									const prevTodo = s.todosById[s.todoOrder[index - 1]]
									prevNameEnd = prevTodo.name.length
									prevTodo.name += todo.name
									delete s.todosById[todo.id]
									s.todoOrder.splice(props.index, 1)
								}
							})
							requestAnimationFrame(() => {
								focusByIndex(props.index - 1, prevNameEnd, prevNameEnd)
							})
						}
					} else if (e.key === 'Delete') {
						if (wasEdge.current) {
							let origNameEnd: number | undefined = undefined
							TodoStore.update((s, o) => {
								const index = o.todoOrder.indexOf(todo.id)
								if (index < o.todoOrder.length - 1) {
									const nextTodo = s.todosById[s.todoOrder[index + 1]]
									origNameEnd = todo.name.length
									s.todosById[todo.id].name += nextTodo.name
									delete s.todosById[nextTodo.id]
									s.todoOrder.splice(index + 1, 1)
								}
							})
							requestAnimationFrame(() => {
								focusByIndex(props.index, origNameEnd, origNameEnd)
							})
						}
					} else if (e.key === 'ArrowUp') {
						e.preventDefault()
						const start = e.currentTarget.selectionStart ?? 0
						focusByIndex(props.index - 1, start, start)
					} else if (e.key === 'ArrowDown') {
						e.preventDefault()
						const end =
							e.currentTarget.selectionEnd ?? e.currentTarget.value.length
						focusByIndex(props.index + 1, end, end)
					}
				}}
			/>
		</form>
	)
}

function focusByIndex(index: number, start?: number, end?: number) {
	const id = TodoStore.getRawState().todoOrder[index]
	if (id != null) {
		const input = document.getElementById(`input-${id}`)
		if (input instanceof HTMLInputElement) {
			input.focus()
			if (start != null && end != null) {
				input.setSelectionRange(start, end)
			}
		}
	}
}
