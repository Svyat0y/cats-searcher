import { TDataObj } from '../../../../redux/voting/types'


export type TVoteUpBtn = {
	onLike: (imgObj: TDataObj) => void
	imgObj: TDataObj
	status: string
}

export type THeartBtn = {
	onFavourite: (imgObj: TDataObj) => void
	imgObj: TDataObj
	status: string
	onFavourites: TDataObj[]
}

export type TVoteDownBtn = {
	onUnlike: (imgObj: TDataObj) => void
	imgObj: TDataObj
	status: string
}
