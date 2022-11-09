import { TOption } from '../../Breeds/types'


export type TOrderSelect = {
	value: string
	onChangeOrder: (e: TOption) => void
}

export type TOrderOption = {
	value: string
	label: string
}