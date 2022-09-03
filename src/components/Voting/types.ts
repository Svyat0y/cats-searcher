import { dataObj } from '../../redux/voting/types'


export type TNavButtons = {
	onLike: (imgObj: dataObj | null) => void,
	onUnlike: (imgObj: dataObj | null) => void,
	imgObj: dataObj | null,
}

export type TVotingMessages = {
	key: number,
	id: string,
	message: string,
	date: Date,
}
