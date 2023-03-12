import { AppDispatch } from '../../../../redux/store'
import { TFilters }    from '../../../../redux/Search/types'


export type TSortButtons = {
	dispatch: AppDispatch
	status: string
	filters: TFilters
	setSearchParams: (params: string) => void
	pageNumberForUI: number
}