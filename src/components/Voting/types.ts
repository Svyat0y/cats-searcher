import { TVotingImage } from './VotingImage/types'
import { TFavourites }  from './Favourites/types'
import { TLikes }       from './Likes/types'
import { TDislikes }    from './Dislikes/types'


export type TVoting = {
	voteImgData: TVotingImage
	favData: TFavourites
	likesData: TLikes
	dislikesData: TDislikes
}