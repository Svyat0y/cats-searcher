import { TDataObj } from '../../../../redux/voting/types'


export type TVoteUpBtn = {
	onLike: (imgObj: TDataObj) => void
	imgObj: TDataObj
	status: string
	btnName: string
	setBtnName: (s: string) => void
}

export type THeartBtn = {
	onFavourite: (imgObj: TDataObj) => void
	imgObj: TDataObj
	status: string
	onFavourites: TDataObj[]
	btnName: string
	setBtnName: (s: string) => void
}

export type TVoteDownBtn = {
	onUnlike: (imgObj: TDataObj) => void
	imgObj: TDataObj
	status: string
	btnName: string
	setBtnName: (s: string) => void
}
