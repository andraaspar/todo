import { createElement, FragmentComp, render, TRenderJSX } from 'matul'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { TodoList } from '../model/TodoList'
import { saveTodoLists } from '../model/todoLists'
import { TodoState } from '../model/TodoState'
import { Icon } from './Icon'
import { IconComp } from './IconComp'

export interface DeleteTodoCompProps {
	todoList: TodoList
	index: number
}
export interface DeleteTodoCompState {}

export const DeleteTodoComp: TRenderJSX<
	DeleteTodoCompProps,
	DeleteTodoCompState
> = (_, v) => {
	const todoList = v.props.todoList
	const index = v.props.index
	const todo = todoList.todos[index]
	return (
		<button
			className='to-todo__delete'
			type='button'
			onclick={() => {
				if (todoList.todos.length === 1) {
					todo.name = ''
					todo.state = TodoState.NEW
					history.back()
				} else {
					todoList.todos.splice(index, 1)
					saveTodoLists()
				}
				render()
			}}
		>
			<div className='to-todo--name'>
				<IconComp icon={Icon.trash} />{' '}
				<IconComp icon={todoStateToIcon(todo.state)} /> {todo.name}
			</div>
		</button>
	)
}
