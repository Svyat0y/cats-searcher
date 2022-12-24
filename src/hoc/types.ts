import { AppDispatch }             from '../redux/store'
import { TData, TInfoInfoMessage } from '../redux/voting/types'


export type TRenderItems = {
	dispatch: AppDispatch
	data: TData[] | null
	page: number
	status?: string
	infoMessage?: TInfoInfoMessage[]
}