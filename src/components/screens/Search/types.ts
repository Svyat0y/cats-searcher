import { TFilters, TSearchData } from '../../../redux/Search/types'
import { AppDispatch }           from '../../../redux/store'
import { TDataObj }              from '../../../redux/voting/types'


export type TSearchedItems = {
	data: TSearchData[] | null
	dispatch: AppDispatch
	firstPage: boolean
	lastPage: boolean
	status: string
	filters: TFilters
	pageNumberForUI: number
	onFavourites?: TDataObj[]
	isLoadingData: boolean
}

export type TItem = {
	onClickBreedName: (breedId: string, name: string) => void
	el: TSearchData
	dispatch: AppDispatch
	onFavourites?: TDataObj[]
	status: string
}