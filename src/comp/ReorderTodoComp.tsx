import { createElement, FragmentComp, render, TRenderJSX } from 'matul'
import { todoStateToIcon } from '../fun/todoStateToIcon'
import { model } from '../model/model'
import { Todo } from '../model/Todo'
import { TodoList } from '../model/TodoList'
import { saveTodoLists } from '../model/todoLists'
import { TodoState } from '../model/TodoState'
import { Icon } from './Icon'
import { IconComp } from './IconComp'

export interface ReorderTodoCompProps {
	todoList: TodoList
	index: number
	disabled?: boolean
}
export interface ReorderTodoCompState {}

export const ReorderTodoComp: TRenderJSX<
	ReorderTodoCompProps,
	ReorderTodoCompState
> = (_, v) => {
	const { index, todoList } = v.props
	const todo: Todo =
		index >= 0
			? todoList.todos[index]
			: { id: crypto.randomUUID(), name: '< top >', state: TodoState.NEW }
	return (
		<button
			class={['to-todo__reorder', index < 0 && 'to-todo__reorder--top']
				.filter(Boolean)
				.join(' ')}
			type='button'
			onclick={() => {
				if (model.todoToReorder == null) {
					model.todoToReorder = todo
					render()
				} else {
					const oldIndex = todoList.todos.indexOf(model.todoToReorder)
					let newIndex = index + 1
					if (newIndex > oldIndex) {
						newIndex--
					}
					todoList.todos.splice(oldIndex, 1)
					todoList.todos.splice(newIndex, 0, model.todoToReorder)
					model.todoToReorder = undefined
					saveTodoLists()
					render()
				}
			}}
			disabled={v.props.disabled}
		>
			<div class='to-todo--name'>
				<IconComp
					icon={
						model.todoToReorder == null
							? Icon.arrowRightShort
							: Icon.arrowDownShort
					}
				/>{' '}
				<IconComp icon={todoStateToIcon(todo.state)} /> {todo.name}
			</div>
		</button>
	)
}
