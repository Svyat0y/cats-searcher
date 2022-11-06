import { AppDispatch } from '../../../redux/store'
import { TLikesData }  from '../../../redux/voting/types'


export type TLikes = {
	dispatch: AppDispatch
	likeData: TLikesData[] | null
	likePage: number
	status?: string
}

export type TLikeItems = {
	likeData: TLikesData[] | null
	likePage: number
	onClickNext: () => void
	onClickPrev: () => void
	firstPage: boolean
	lastPage: boolean | null
}
