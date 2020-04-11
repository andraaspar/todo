import React, { PropsWithChildren, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 } from 'uuid'
import { TodoState } from '../model/TodoState'
import { TodoStore } from '../store/TodoStore'
import { IconComp } from './IconComp'
import { Icons_arrowUpDown, Icons_plus, Icons_trash } from './Icons'
import { TodoComp } from './TodoComp'

export interface TodoListCompProps {}

export function TodoListComp(props: PropsWithChildren<TodoListCompProps>) {
	const newNameRef = useRef<HTMLInputElement>(null)
	const [$newName, set$newName] = useState('')
	const todoOrder = TodoStore.useState((s) => s.todoOrder)
	const history = useHistory()
	return (
		<>
			<h1 className='to-title'>TODOs</h1>
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
			{todoOrder.map((id) => {
				return <TodoComp key={id} id={id} />
			})}
			<form
				className='to-new-todo'
				onSubmit={(e) => {
					e.preventDefault()
					TodoStore.update((s) => {
						const id = v4()
						s.todosById[id] = {
							id: id,
							name: $newName,
							state: TodoState.NEW,
						}
						s.todoOrder.push(id)
					})
					set$newName('')
					newNameRef.current?.focus()
				}}
			>
				<input
					ref={newNameRef}
					className='to-new-todo--name'
					value={$newName}
					onChange={(e) => {
						set$newName(e.currentTarget.value)
					}}
				/>
				<button>
					<IconComp icon={Icons_plus} />
				</button>
			</form>
		</>
	)
}
