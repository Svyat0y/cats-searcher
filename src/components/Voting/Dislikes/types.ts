import { TDataObj }    from '../../../redux/voting/types'
import { AppDispatch } from '../../../redux/store'


export type TDislikes = {
	dispatch: AppDispatch
	unlikeData: TDataObj[]
	status: string
}
