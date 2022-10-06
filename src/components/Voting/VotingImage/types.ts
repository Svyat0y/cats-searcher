import { TDataObj, TInfoInfoMessage } from '../../../redux/voting/types'
import { AppDispatch }                from '../../../redux/store'


export type TVotingImage = {
	dispatch: AppDispatch
	voteData: TDataObj
	onFavourites: TDataObj[]
	onLike: (imgObj: TDataObj) => void
	onUnlike: (imgObj: TDataObj) => void
	onFavourite: (imgId: TDataObj) => void
	infoMessage: TInfoInfoMessage[]
	status: string
}
