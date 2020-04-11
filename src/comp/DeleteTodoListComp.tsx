import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import { withInterface } from '../fun/withInterface'
import { TodoState } from '../model/TodoState'
import { ITodoStore, TodoStore } from '../store/TodoStore'
import { DeleteTodoComp } from './DeleteTodoComp'
import { IconComp } from './IconComp'
import { Icons_arrowLeftShort, Icons_checkCircle, Icons_xCircle } from './Icons'

export interface DeleteTodoListCompProps {}

export function DeleteTodoListComp(
	props: PropsWithChildren<DeleteTodoListCompProps>,
) {
	const history = useHistory()
	const todoOrder = TodoStore.useState((s) => s.todoOrder)
	return (
		<>
			<h1 className='to-title'>Delete TODOs</h1>
			<div className='to-buttons'>
				<button
					type='button'
					onClick={() => {
						history.goBack()
					}}
				>
					<IconComp icon={Icons_arrowLeftShort} />
				</button>
				<button
					type='button'
					onClick={() => {
						TodoStore.update((s, o) => {
							s.todoOrder = o.todoOrder.filter((id) => {
								if (o.todosById[id].state === TodoState.DONE) {
									delete s.todosById[id]
									return false
								}
								return true
							})
						})
						history.goBack()
					}}
				>
					Delete done <IconComp icon={Icons_checkCircle} />
				</button>
				<button
					type='button'
					onClick={() => {
						TodoStore.update((s, o) => {
							s.todoOrder = o.todoOrder.filter((id) => {
								if (
									o.todosById[id].state === TodoState.FAILED
								) {
									delete s.todosById[id]
									return false
								}
								return true
							})
						})
						history.goBack()
					}}
				>
					Delete failed <IconComp icon={Icons_xCircle} />
				</button>
				<button
					type='button'
					onClick={() => {
						TodoStore.update((s, o) => {
							return withInterface<ITodoStore>({
								todoOrder: [],
								todosById: {},
							})
						})
						history.goBack()
					}}
				>
					Delete all
				</button>
			</div>
			{todoOrder.map((id) => (
				<DeleteTodoComp key={id} id={id} />
			))}
		</>
	)
}
