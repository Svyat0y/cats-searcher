import {TBreedOption} from '../../redux/Breeds/types'
import {AppDispatch} from '../../redux/store'


export type TBreedSelect = {
    options: TBreedOption[]
    status: string
    dispatch: AppDispatch
    value: string
    onChangeOption: (e: TOption) => void
}

export type TBreedSortButtons = {
    dispatch: AppDispatch
    order: string
    status: string
    oncClickAsk: () => void
    oncClickDesk: () => void
}

export type TOption = {
    value: string
    label: string
} | null