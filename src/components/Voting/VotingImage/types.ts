import { TDataObj } from '../../../redux/voting/types'


export type TVotingImage = {
	voteData: TDataObj,
	favouriteData: TDataObj[],
	onLike: (imgObj: TDataObj) => void,
	onUnlike: (imgObj: TDataObj) => void,
	onFavourite: (imgId: TDataObj) => void,
	status: string,
}
