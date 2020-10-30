import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { TodoState } from '../model/TodoState'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'
import { Icons_trash } from './Icons'

export interface DeleteTodoCompProps {
	id: string
}

export function DeleteTodoComp(props: PropsWithChildren<DeleteTodoCompProps>) {
	const todo = TodoStore.useState((s) => s.todosById[props.id])
	const history = useHistory()
	return (
		<button
			className='to-todo__delete'
			type='button'
			onClick={(e) => {
				TodoStore.update((s, o) => {
					if (s.todoOrder.length === 1) {
						const todo = s.todosById[props.id]
						todo.name = ''
						todo.state = TodoState.NEW
						history.goBack()
					} else {
						delete s.todosById[props.id]
						s.todoOrder = o.todoOrder.filter((id) => id !== props.id)
					}
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
