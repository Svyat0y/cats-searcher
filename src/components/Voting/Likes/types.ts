import { AppDispatch } from '../../../redux/store'
import { TLikesData }  from '../../../redux/voting/types'


export type TLikes = {
	dispatch: AppDispatch
	likeData: TLikesData[]
	status: string
}
