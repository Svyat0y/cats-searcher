import { AppDispatch }                       from '../../../redux/store'
import { TFavouritesData, TInfoInfoMessage } from '../../../redux/voting/types'


export type TFavourites = {
	dispatch: AppDispatch
	favoritesData: TFavouritesData[] | null
	infoMessage: TInfoInfoMessage[]
	status?: string
	favPage: number
	isFavMounted: boolean
}
export type TFavoriteItem = {
	el: TFavouritesData
	status?: string
	dispatch: AppDispatch
}

export type TFavItems = {
	dispatch: AppDispatch
	favoritesData: TFavouritesData[] | null
	favPage: number
	status?: string
}

