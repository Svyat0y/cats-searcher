import { Status } from '../voting/types'


type ISearchData = {
	id: string
	name: string
	url: string
}

export interface ISearch {
	searchData: ISearchData[] | null
	status: Status
}