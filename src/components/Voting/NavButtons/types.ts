import { TDataObj } from '../../../redux/voting/types'


export type TNavButtons = {
	onLike: (imgObj: TDataObj) => void
	onUnlike: (imgObj: TDataObj) => void
	onFavourite: (imgId: TDataObj) => void
	imgObj: TDataObj
	onFavourites: TDataObj[]
	status: string
}
