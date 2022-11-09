import { TOption } from '../../Breeds/types'


export type TTypeSelect = {
	value: string
	onChangeType: (e: TOption) => void
}

export type TTypeOption = {
	value: string
	label: string
}