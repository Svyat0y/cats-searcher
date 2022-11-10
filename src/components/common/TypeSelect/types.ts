import { TFilters } from '../../../redux/Search/types'


export type TTypeSelect = {
	setSearchParams: (obj: string) => void
	filters: TFilters
	pageNumberForUI: number
}

export type TTypeOption = {
	value: string
	label: string
}