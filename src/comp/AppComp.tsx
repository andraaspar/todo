import React, { PropsWithChildren } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DeleteTodoListComp } from './DeleteTodoListComp'
import { ReorderTodoListComp } from './ReorderTodoListComp'
import { TodoListComp } from './TodoListComp'

export interface AppCompProps {}

export function AppComp(props: PropsWithChildren<AppCompProps>) {
	return (
		<>
			<Switch>
				<Route path='/delete' component={DeleteTodoListComp} />
				<Route path='/reorder' component={ReorderTodoListComp} />
				<Route path='/' component={TodoListComp} />
			</Switch>
		</>
	)
}
