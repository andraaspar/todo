import { createElement, FragmentComp, render, TRenderJSX } from 'matul'
import { getUrl } from '../fun/getUrl'
import { DeleteTodoListComp } from './DeleteTodoListComp'
import { IconsComp } from './IconsComp'
import { ReorderTodoListComp } from './ReorderTodoListComp'
import { TodoListsComp } from './TodoListsComp'

export interface AppCompProps {}
export interface AppCompState {}

export const AppComp: TRenderJSX<AppCompProps, AppCompState> = (_, v) => {
	v.onadded = () => {
		window.addEventListener('hashchange', () => {
			render()
		})
	}
	return (
		<>
			<IconsComp />
			{(() => {
				switch (getUrl().pathname) {
					case '/delete':
						return <DeleteTodoListComp />
					case '/reorder':
						return <ReorderTodoListComp />
					case '/':
					default:
						return <TodoListsComp />
				}
			})()}
		</>
	)
}
