import React, { PropsWithChildren } from 'react'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'
import { Icons_trash } from './Icons'

export interface DeleteTodoCompProps {
	id: string
}

export function DeleteTodoComp(props: PropsWithChildren<DeleteTodoCompProps>) {
	const todo = TodoStore.useState((s) => s.todosById[props.id])
	return (
		<button
			className='to-todo__delete'
			type='button'
			onClick={(e) => {
				TodoStore.update((s, o) => {
					delete s.todosById[props.id]
					s.todoOrder = o.todoOrder.filter((id) => id !== props.id)
				})
			}}
		>
			<div className='to-todo--name'>
				<IconComp icon={Icons_trash} />{' '}
				<IconComp icon={todoStateToIcon(todo.state)} /> {todo.name}
			</div>
		</button>
	)
}
