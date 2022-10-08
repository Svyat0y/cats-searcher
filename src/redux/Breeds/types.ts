import { Status } from '../voting/types'


export interface IBreeds {
	singleBreed: TSingleBreed[],
	status: Status,
}

export type TSingleBreed = {
	desc: string
	id: string
	image: string
	life_span: string
	temperament: string
	weight: string
}