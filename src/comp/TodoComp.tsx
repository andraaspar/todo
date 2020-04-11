import React, { PropsWithChildren } from 'react'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { TodoStates } from '../model/TodoState'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'

export interface TodoCompProps {
	id: string
}

export function TodoComp(props: PropsWithChildren<TodoCompProps>) {
	const todo = TodoStore.useState((s) => s.todosById[props.id])
	return (
		<div className='to-todo'>
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
				className='to-todo--name'
				value={todo.name}
				onChange={(e) => {
					TodoStore.update((s) => {
						s.todosById[props.id].name = e.currentTarget.value
					})
				}}
			/>
		</div>
	)
}
