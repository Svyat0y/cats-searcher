import { TBreedOption } from '../../redux/Breeds/types'
import { AppDispatch }  from '../../redux/store'
import { TFilters }     from '../../redux/Search/types'


export type TBreedSelect = {
	options: TBreedOption[]
	status: string
	dispatch: AppDispatch
	setSearchParams: (obj: string) => void
	filters: TFilters
	pageNumberForUI: number
}

export type TBreedSortButtons = {
	dispatch: AppDispatch
	status: string
	filters: TFilters
	setSearchParams: (obj: string) => void
	pageNumberForUI: number
}

export type TOption = {
	value: string
	label: string
} | null