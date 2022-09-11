import { AppDispatch }     from '../../../redux/store'
import { TFavouritesData } from '../../../redux/voting/types'


export type TFavourites = {
	dispatch: AppDispatch
	favoritesData: TFavouritesData[]
}
