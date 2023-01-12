import { TFilters, TOption } from '../../../redux/Search/types'
import { TBreedOption }      from '../../../redux/Breeds/types'
import { AppDispatch }       from '../../../redux/store'


export type TBreedSelect = {
	options: TBreedOption[]
	dispatch: AppDispatch
	setSearchParams: (obj: string) => void
	filters: TFilters
	pageNumberForUI: number
	onChangeOption: (e: TOption) => void
	getValue: () => TBreedOption | undefined
}