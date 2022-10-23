import { TBreedOption } from '../../redux/Breeds/types'
import { AppDispatch }  from '../../redux/store'


export type TBreedSelect = {
	options: TBreedOption[]
	status: string
}

export type TBreedSortButtons = {
	dispatch: AppDispatch
}