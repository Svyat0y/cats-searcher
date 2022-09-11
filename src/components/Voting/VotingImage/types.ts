import { TDataObj, TInfoInfoMessage } from '../../../redux/voting/types'


export type TVotingImage = {
	voteData: TDataObj
	onFavourites: TDataObj[]
	onLike: (imgObj: TDataObj) => void
	onUnlike: (imgObj: TDataObj) => void
	onFavourite: (imgId: TDataObj) => void
	infoMessage: TInfoInfoMessage[]
	status: string
}
