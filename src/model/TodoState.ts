export enum TodoState {
	NEW = 'NEW',
	DONE = 'DONE',
	FAILED = 'FAILED',
}

export const TodoStates: readonly TodoState[] = [
	TodoState.NEW,
	TodoState.DONE,
	TodoState.FAILED,
]
