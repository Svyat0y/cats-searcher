import { Status } from '../voting/types'


export type TSearchData = {
	id: string
	breedId: string
	name: string
	url: string
}

export interface ISearch {
	searchData: TSearchData[] | null
	status: Status
	isSearchMounted: boolean
	searchValue: string
}