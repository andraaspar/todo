import { createElement, FragmentComp, render, TRenderJSX } from 'matul'
import { getUrl } from '../fun/getUrl'
import { makeDefaultTodo } from '../fun/makeDefaultTodo'
import { getTodoLists, saveTodoLists } from '../model/todoLists'
import { TodoState } from '../model/TodoState'
import { DeleteTodoComp } from './DeleteTodoComp'
import { Icon } from './Icon'
import { IconComp } from './IconComp'

export interface DeleteTodoListCompProps {}
export interface DeleteTodoListCompState {}

export const DeleteTodoListComp: TRenderJSX<
	DeleteTodoListCompProps,
	DeleteTodoListCompState
> = (_, v) => {
	const todoLists = getTodoLists()
	const id = getUrl().searchParams.get('id')
	const todoList = todoLists.find((it) => it.id === id)!
	function ensureOneTodo() {
		if (todoList.todos.length === 0) {
			todoList.todos.push(makeDefaultTodo())
		}
	}
	return (
		<div class='to-list'>
			<h1 className='to-title'>Delete TODOs</h1>
			<div className='to-buttons'>
				<button
					type='button'
					onclick={() => {
						history.back()
						render()
					}}
				>
					<IconComp icon={Icon.arrowLeftShort} />
				</button>
				<button
					type='button'
					onclick={() => {
						todoList.todos = todoList.todos.filter(
							(it) => it.state !== TodoState.DONE,
						)
						ensureOneTodo()
						saveTodoLists()
						history.back()
						render()
					}}
				>
					Delete done <IconComp icon={Icon.checkCircle} />
				</button>
				<button
					type='button'
					onclick={() => {
						todoList.todos = todoList.todos.filter(
							(it) => it.state !== TodoState.FAILED,
						)
						ensureOneTodo()
						saveTodoLists()
						history.back()
						render()
					}}
				>
					Delete failed <IconComp icon={Icon.xCircle} />
				</button>
				<button
					type='button'
					onclick={() => {
						todoList.todos = [makeDefaultTodo()]
						saveTodoLists()
						history.back()
						render()
					}}
				>
					Delete all
				</button>
			</div>
			{todoList.todos.map((todo, index) => (
				<DeleteTodoComp key={todo.id} todoList={todoList} index={index} />
			))}
		</div>
	)
}
