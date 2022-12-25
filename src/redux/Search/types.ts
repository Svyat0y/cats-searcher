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
	height: number
	width: number
}

export interface ISearch {
	searchData: TSearchData[] | null
	status: Status
	searchValue: string | null
	breedsList: TBreedOption[]
	breedFilters: TFilters
	galleryFilters: TFilters
	isLoadingData: boolean
	isError: boolean
}

export type TOption = {
	value: string
	label: string
} | null