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
	const todo = TodoStore.useState((s) => s.todosById[props.id])
	return (
		<form
			className='to-todo'
			onSubmit={(e) => {
				e.preventDefault()
				const id = v4()
				TodoStore.update((s) => {
					s.todosById[id] = {
						id: id,
						name: '',
						state: TodoState.NEW,
					}
					s.todoOrder.splice(props.index + 1, 0, id)
				})
				requestAnimationFrame(() => {
					document.getElementById(`input-${id}`)?.focus()
				})
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
				onChange={(e) => {
					TodoStore.update((s) => {
						s.todosById[props.id].name = e.currentTarget.value
					})
				}}
				onKeyDown={(e) => {
					wasEmpty.current = e.currentTarget.value === ''
				}}
				onKeyUp={(e) => {
					if (e.key === 'Backspace' && wasEmpty.current && props.index > 0) {
						TodoStore.update((s) => {
							delete s.todosById[todo.id]
							s.todoOrder.splice(props.index, 1)
						})
						focusByIndex(props.index - 1)
					} else if (e.key === 'ArrowUp') {
						focusByIndex(props.index - 1)
					} else if (e.key === 'ArrowDown') {
						focusByIndex(props.index + 1)
					}
				}}
				onFocus={(e) => {
					e.currentTarget.setSelectionRange(0, e.currentTarget.value.length)
				}}
			/>
		</form>
	)
}

function focusByIndex(index: number) {
	const id = TodoStore.getRawState().todoOrder[index]
	if (id != null) {
		const input = document.getElementById(
			`input-${id}`,
		) as HTMLInputElement | null
		input?.focus()
	}
}
