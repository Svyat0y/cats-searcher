import { TDataObj } from '../../redux/voting/types'


export type TNavButtons = {
	onLike: (imgObj: TDataObj) => void,
	onUnlike: (imgObj: TDataObj) => void,
	imgObj: TDataObj,
}

export type TVotingMessages = {
	key: number,
	id: string,
	message: string,
	time: string,
}
