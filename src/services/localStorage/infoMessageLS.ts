import { TInfoInfoMessage } from '../../redux/voting/types'

import { AppDispatch }    from '../../redux/store'
import { setInfoMessage } from '../../redux/voting/slice'


const getData = () => {
	const data = localStorage.getItem('voteMessages')
	return data ? JSON.parse(data) : []
}

export const setLsMessages = (message: TInfoInfoMessage) => {
	const messages = getData()
	messages.unshift(message)

	if (messages.length > 4) messages.pop()
	const json = JSON.stringify(messages)
	localStorage.setItem('voteMessages', json)
}

export const getLsMessages = (dispatch: AppDispatch) => {
	const messages = getData()
	dispatch(setInfoMessage(messages))
}