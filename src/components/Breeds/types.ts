import { TBreedOption } from '../../redux/Breeds/types'
import { AppDispatch }  from '../../redux/store'


export type TBreedSelect = {
	options: TBreedOption[]
	status: string
	dispatch: AppDispatch
}

export type TBreedSortButtons = {
	dispatch: AppDispatch
	order: string
	status: string
}

export type TOption = {
	value: string
	label: string
} | null