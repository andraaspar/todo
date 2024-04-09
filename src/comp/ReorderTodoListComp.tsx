import { createElement, FragmentComp, TRenderJSX } from 'matul'
import { getUrl } from '../fun/getUrl'
import { goBack } from '../fun/goBack'
import { model } from '../model/model'
import { getTodoLists } from '../model/todoLists'
import { Icon } from './Icon'
import { IconComp } from './IconComp'
import { ReorderTodoComp } from './ReorderTodoComp'

export interface ReorderTodoListCompProps {}
export interface ReorderTodoListCompState {}

export const ReorderTodoListComp: TRenderJSX<
	ReorderTodoListCompProps,
	ReorderTodoListCompState
> = (_, v) => {
	const todoLists = getTodoLists()
	const id = getUrl().searchParams.get('id')!
	const todoList = todoLists.find((it) => it.id === id)!
	return (
		<div class='to-list'>
			<h1 className='to-title'>Reorder TODOs</h1>
			<div className='to-buttons'>
				<button type='button' onclick={goBack}>
					<IconComp icon={Icon.arrowLeftShort} />
				</button>
			</div>
			{
				<ReorderTodoComp
					todoList={todoList}
					index={-1}
					disabled={model.todoToReorder == null}
				/>
			}
			{todoList.todos
				.filter((todo) => todo !== model.todoToReorder)
				.map((todo) => (
					<ReorderTodoComp
						key={todo.id}
						todoList={todoList}
						index={todoList.todos.indexOf(todo)}
					/>
				))}
		</div>
	)
}
