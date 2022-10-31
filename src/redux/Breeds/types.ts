import { Status } from '../voting/types'


export interface IBreeds {
	singleBreed: TSingleBreed[]
	status: Status
	activeBreedName: string
}

export type TBreedOption = {
	value: string
	label: string
}

export type TSingleBreed = {
	desc: string
	name: string
	origin: string
	id: string
	image: string
	life_span: string
	temperament: string
	weight: string
}