import { AppDispatch }  from '../../../redux/store'
import { TFilters }     from '../../../redux/Search/types'
import { TBreedOption } from '../../../redux/Breeds/types'


export type TLimitSelect = {
	dispatch: AppDispatch
	setSearchParams: (obj: string) => void
	filters: TFilters
	pageNumberForUI: number
	options: TBreedOption[]
	status?: string
}
