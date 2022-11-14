import { TFilters, TSearchData } from '../../redux/Search/types'
import { AppDispatch }           from '../../redux/store'


export type TSearchedItems = {
	data: TSearchData[] | null
	dispatch: AppDispatch
	firstPage: boolean
	lastPage: boolean | null
	status: string
	filters: TFilters
	pageNumberForUI: number
}

export type TItem = {
	onClickBreedName: (breedId: string, name: string) => void
	el: TSearchData
	dispatch: AppDispatch
}