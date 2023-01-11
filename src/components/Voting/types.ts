import { AppDispatch }                       from '../../redux/store'
import { TData, TDataObj, TInfoInfoMessage } from '../../redux/voting/types'
import { TDislikes }                         from '../screens/Dislikes/types'


export type TVoting = {
	voteImgData: TVotingImage
	favData: TFavData
	likesData: TLikeData
	dislikesData: TDislikes
}

type TFavData = {
	dispatch: AppDispatch
	data: TData[] | null
	infoMessage?: TInfoInfoMessage[]
	status: string
	page: number
}
type TLikeData = {
	dispatch: AppDispatch
	data: TData[] | null
	page: number
}


export type TVotingItems = {
	dispatch: AppDispatch
	data: TData[] | null
	page: number
	status?: string
	firstPage: boolean
	lastPage: boolean
	onClickNext: () => void
	onClickPrev: () => void
	isLoading: boolean
	noItemsBoolean: boolean
	infoMessage?: TInfoInfoMessage[]
}

export type TVotingImage = {
	dispatch: AppDispatch
	voteData: TDataObj
	onFavourites: TDataObj[]
	infoMessage: TInfoInfoMessage[]
	status: string
}

