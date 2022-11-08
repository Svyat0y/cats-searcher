import { AppDispatch } from '../../../redux/store'
import { TData }       from '../../../redux/voting/types'


export type TFavoriteItem = {
	el: TData
	status?: string
	dispatch?: AppDispatch
}

