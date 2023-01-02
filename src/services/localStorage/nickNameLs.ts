import { AppDispatch } from '../../redux/store'
import { setUserId }   from '../../redux/voting/slice'


export const getNickNameLS = (dispatch: AppDispatch) => {
	const data = localStorage.getItem('name')
	const name = data ? JSON.parse(data) : []

	if (name.length > 0) {
		dispatch(setUserId(name))
	}
	else return
}

export const setNickNameLS = (name: string, dispatch: AppDispatch) => {
	const json = JSON.stringify(name)
	localStorage.setItem('name', json)

	dispatch(setUserId(name))
}