import { AppDispatch }                       from '../../redux/store'
import { TData, TDataObj, TInfoInfoMessage } from '../../redux/voting/types'


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

