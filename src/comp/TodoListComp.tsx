import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import { TodoState } from '../model/TodoState'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'
import { Icons_arrowUpDown, Icons_clipboard, Icons_trash } from './Icons'
import { TodoComp } from './TodoComp'

export interface TodoListCompProps {}

export function TodoListComp(props: PropsWithChildren<TodoListCompProps>) {
	const todoOrder = TodoStore.useState((s) => s.todoOrder)
	const history = useHistory()
	return (
		<>
			<div className='to-buttons'>
				<button
					type='button'
					onClick={() => {
						history.push(`/delete`)
					}}
				>
					<IconComp icon={Icons_trash} />
				</button>
				<button
					type='button'
					onClick={() => {
						history.push(`/reorder`)
					}}
				>
					<IconComp icon={Icons_arrowUpDown} />
				</button>
				<button
					type='button'
					onClick={() => {
						const s = TodoStore.getRawState()
						navigator.clipboard.writeText(
							s.todoOrder.map((id) => s.todosById[id].name).join('\n'),
						)
					}}
				>
					<IconComp icon={Icons_clipboard} />
				</button>
				<button
					type='button'
					style={{ marginLeft: 'auto' }}
					onClick={() => {
						TodoStore.update((s, o) => {
							for (const todo of Object.values(s.todosById)) {
								todo.state = TodoState.NEW
							}
						})
					}}
				>
					Reset all
				</button>
			</div>
			{todoOrder.map((id, index) => {
				return <TodoComp key={id} id={id} index={index} />
			})}
		</>
	)
}
