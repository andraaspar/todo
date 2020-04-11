import React, { PropsWithChildren } from 'react'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { AppStore } from '../store/AppStore'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'
import { Icons_arrowDownShort, Icons_arrowRightShort } from './Icons'

export interface ReorderTodoCompProps {
	id: string
}

export function ReorderTodoComp(
	props: PropsWithChildren<ReorderTodoCompProps>,
) {
	const todo = TodoStore.useState((s) => s.todosById[props.id])
	const reorderId = AppStore.useState((s) => s.reorderId)
	return (
		<button
			className='to-todo__reorder'
			type='button'
			onClick={(e) => {
				if (reorderId == null) {
					AppStore.update((s) => {
						s.reorderId = props.id
					})
				} else {
					TodoStore.update((s, o) => {
						const oldIndex = o.todoOrder.indexOf(reorderId)
						let newIndex = o.todoOrder.indexOf(props.id) + 1
						if (newIndex > oldIndex) {
							newIndex--
						}
						s.todoOrder.splice(oldIndex, 1)
						s.todoOrder.splice(newIndex, 0, reorderId)
					})
					AppStore.update((s) => {
						s.reorderId = null
					})
				}
			}}
		>
			<div className='to-todo--name'>
				<IconComp
					icon={
						reorderId == null
							? Icons_arrowRightShort
							: Icons_arrowDownShort
					}
				/>{' '}
				<IconComp icon={todoStateToIcon(todo.state)} /> {todo.name}
			</div>
		</button>
	)
}
