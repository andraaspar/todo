import { Store } from 'pullstate'

export interface IAppStore {
	reorderId: string | null
}

export const AppStore = new Store<IAppStore>({
	reorderId: null,
})
