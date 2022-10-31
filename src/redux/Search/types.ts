import { Status }       from '../voting/types'
import { TBreedOption } from '../Breeds/types'


export type TSearchData = {
	id: string
	breedId: string
	name: string
	url: string
}

export interface ISearch {
	searchData: TSearchData[] | null
	status: Status
	searchValue: string
	value: string
	limit: string
	order: string
	page: number
	breedsList: TBreedOption[]
}