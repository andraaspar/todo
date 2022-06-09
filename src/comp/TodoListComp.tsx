import { createElement, FragmentComp, render, TRenderJSX } from 'matul'
import { getTodoLists, saveTodoLists } from '../model/todoLists'
import { TodoState } from '../model/TodoState'
import { Icon } from './Icon'
import { IconComp } from './IconComp'
import { TodoComp } from './TodoComp'

export interface TodoListCompProps {
	index: number
}
export interface TodoListCompState {}

export const TodoListComp: TRenderJSX<TodoListCompProps, TodoListCompState> = (
	_,
	v,
) => {
	const todoList = getTodoLists()[v.props.index]
	return (
		<div class='to-list'>
			<div class='to-list__head'>
				<input
					class='to-list__head__name-in'
					value={todoList.name}
					oninput={function (this: HTMLInputElement) {
						todoList.name = this.value
						saveTodoLists()
					}}
				/>
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
					style={{ marginLeft: 'auto' }}
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
			{todoList.todos.map((todo, index) => {
				return (
					<TodoComp
						key={todo.id}
						id={todo.id}
						todoList={todoList}
						index={index}
					/>
				)
			})}
		</div>
	)
}
