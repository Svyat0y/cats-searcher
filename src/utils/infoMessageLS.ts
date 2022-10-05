import { TInfoInfoMessage } from '../redux/voting/types'
import { AppDispatch }      from '../redux/store'
import { setInfoMessage }   from '../redux/voting/slice'


export const setLsMessages = (message: TInfoInfoMessage) => {
	const data = localStorage.getItem('voteMessages')
	const messages = data ? JSON.parse(data) : []

	messages.unshift(message)
	if (messages.length > 4) messages.pop()
	const json = JSON.stringify(messages)
	localStorage.setItem('voteMessages', json)
}

export const getLsMessages = (dispatch: AppDispatch) => {
	const data = localStorage.getItem('voteMessages')
	const messages = data ? JSON.parse(data) : []

	dispatch(setInfoMessage(messages))
}