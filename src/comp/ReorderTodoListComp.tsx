import React, { PropsWithChildren, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AppStore } from '../store/AppStore'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'
import { Icons_arrowLeftShort } from './Icons'
import { ReorderTodoComp } from './ReorderTodoComp'

export interface ReorderTodoListCompProps {}

export function ReorderTodoListComp(
	props: PropsWithChildren<ReorderTodoListCompProps>,
) {
	const todoOrder = TodoStore.useState((s) => s.todoOrder)
	const reorderId = AppStore.useState((s) => s.reorderId)
	const history = useHistory()
	useEffect(
		() => () => {
			AppStore.update((s) => {
				s.reorderId = null
			})
		},
		[],
	)
	return (
		<>
			<h1 className='to-title'>Reorder TODOs</h1>
			<div className='to-buttons'>
				<button
					type='button'
					onClick={() => {
						history.goBack()
					}}
				>
					<IconComp icon={Icons_arrowLeftShort} />
				</button>
			</div>
			{todoOrder
				.filter((id) => id !== reorderId)
				.map((id) => (
					<ReorderTodoComp key={id} id={id} />
				))}
		</>
	)
}
