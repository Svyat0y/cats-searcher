import { Status } from '../voting/types'


export type TSearchData = {
	id: string
	name: string
	url: string
}

export interface ISearch {
	searchData: TSearchData[]
	status: Status
}