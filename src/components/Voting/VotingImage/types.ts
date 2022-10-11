import { TDataObj, TInfoInfoMessage } from '../../../redux/voting/types'
import { AppDispatch }                from '../../../redux/store'


export type TVotingImage = {
	dispatch: AppDispatch
	voteData: TDataObj
	onFavourites: TDataObj[]
	infoMessage: TInfoInfoMessage[]
	status: string
}
