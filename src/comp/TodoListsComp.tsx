import { createElement, FragmentComp, TRenderJSX } from 'matul'
import { getTodoLists } from '../model/todoLists'
import { TodoListComp } from './TodoListComp'

export interface TodoListsCompProps {}
export interface TodoListsCompState {}

export const TodoListsComp: TRenderJSX<
	TodoListsCompProps,
	TodoListsCompState
> = (_, v) => {
	return (
		<div class='to-lists'>
			{getTodoLists().map((list, index) => (
				<TodoListComp key={list.id} index={index} />
			))}
		</div>
	)
}
