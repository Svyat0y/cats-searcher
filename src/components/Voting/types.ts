import { TDataObj } from '../../redux/voting/types'


export type TNavButtons = {
	onLike: (imgObj: TDataObj) => void,
	onUnlike: (imgObj: TDataObj) => void,
	onFavourite: (imgId: TDataObj) => void,
	imgObj: TDataObj,
	favoriteData: TDataObj[],
	status: string,
}

export type TVotingMessages = {
	key: number,
	id: string,
	message: string,
	time: string,
}
