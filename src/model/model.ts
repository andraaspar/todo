import { Todo } from './Todo'

export interface Model {
	todoToReorder?: Todo
	rootScrollY: number
}

export const model: Model = {
	rootScrollY: 0,
}
