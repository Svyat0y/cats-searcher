import { TFilters } from '../../../redux/Search/types'


export type TOrderSelect = {
	setSearchParams: (obj: string) => void
	filters: TFilters
	pageNumberForUI: number
}

export type TOrderOption = {
	value: string
	label: string
}