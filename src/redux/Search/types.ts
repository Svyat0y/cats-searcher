import { Status }       from '../voting/types'
import { TBreedOption } from '../Breeds/types'


export type TFilters = {
	value: string
	limit: string
	order: string
	page: number
	type: string
}

export type TSearchData = {
	id: string
	breedId: string
	name: string
	url: string
}

export interface ISearch {
	searchData: TSearchData[] | null
	status: Status
	searchValue: string | null
	breedsList: TBreedOption[]
	filters: TFilters
	galleryFilters: TFilters
}