import { createElement, FragmentComp, render, TRenderJSX } from 'matul'
import { focusByIndex } from '../fun/focusByIndex'
import { formatNumber } from '../fun/formatNumber'
import { getFocusIndex } from '../fun/getFocusIndex'
import { getTodoLists, saveTodoLists } from '../model/todoLists'
import { TodoState } from '../model/TodoState'
import { Icon } from './Icon'
import { IconComp } from './IconComp'
import { TodoComp } from './TodoComp'

export interface TodoListCompProps {
	index: number
}
export interface TodoListCompState {
	nameInRef: HTMLInputElement
}

export const TodoListComp: TRenderJSX<TodoListCompProps, TodoListCompState> = (
	_,
	v,
) => {
	const todoList = getTodoLists()[v.props.index]
	const value = todoList.value
	return (
		<div class='to-list'>
			<div class='to-list__head'>
				<input
					ref={(r: HTMLInputElement) => {
						v.state.nameInRef = r
					}}
					class='to-list__head__name-in'
					value={todoList.name}
					oninput={function (this: HTMLInputElement) {
						todoList.name = this.value
						saveTodoLists()
					}}
					onkeydown={function (this: HTMLInputElement, e: KeyboardEvent) {
						if (e.key === 'ArrowUp') {
							e.preventDefault()
						} else if (e.key === 'ArrowDown') {
							e.preventDefault()
						}
					}}
					onkeyup={async function (this: HTMLInputElement, e: KeyboardEvent) {
						if (e.key === 'ArrowUp') {
							e.preventDefault()
							const start = this.selectionStart ?? 0
							focusByIndex(getFocusIndex(v.state.nameInRef!) - 1, start, start)
						} else if (e.key === 'ArrowDown') {
							e.preventDefault()
							const end = this.selectionEnd ?? this.value.length
							focusByIndex(getFocusIndex(v.state.nameInRef!) + 1, end, end)
						}
					}}
				/>
				{value != 0 && (
					<div class='to-list__head__value'>{formatNumber(value)}</div>
				)}
				{value != 0 && (
					<button
						type='button'
						onclick={() => {
							navigator.clipboard.writeText(value + '')
						}}
					>
						<IconComp icon={Icon.clipboard} />
					</button>
				)}
			</div>
			<div class='to-buttons'>
				<button
					type='button'
					onclick={() => {
						location.hash = `/delete?id=${encodeURIComponent(todoList.id)}`
						render()
					}}
				>
					<IconComp icon={Icon.trash} />
				</button>
				<button
					type='button'
					onclick={() => {
						location.hash = `/reorder?id=${encodeURIComponent(todoList.id)}`
						render()
					}}
				>
					<IconComp icon={Icon.arrowUpDown} />
				</button>
				<button
					type='button'
					onclick={() => {
						navigator.clipboard.writeText(
							todoList.todos.map((todo) => todo.name).join('\n'),
						)
					}}
				>
					<IconComp icon={Icon.clipboard} />
				</button>
				<button
					type='button'
					style='margin-left:auto'
					onclick={() => {
						for (const todo of todoList.todos) {
							todo.state = TodoState.NEW
						}
						saveTodoLists()
						render()
					}}
				>
					Reset all
				</button>
			</div>
			{todoList.todos.map((todo, index) => (
				<TodoComp
					key={todo.id}
					id={todo.id}
					todoList={todoList}
					index={index}
				/>
			))}
		</div>
	)
}
