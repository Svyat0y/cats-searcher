import {AppDispatch} from '../../../redux/store'
import {TOption} from '../../Breeds/types'


export type TLimitSelect = {
    dispatch: AppDispatch
    limit: string
    onChangeLimit: (e: TOption) => void
}
