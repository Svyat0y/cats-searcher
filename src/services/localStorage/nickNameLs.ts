import { AppDispatch }                  from '../../redux/store'
import { setShowModalLogin, setUserId } from '../../redux/Login/slice'


export const getNickNameLS = (dispatch: AppDispatch) => {
	const data = localStorage.getItem('userName')
	const name = data ? JSON.parse(data) : []

	if (name.length > 0) dispatch(setUserId(name))
	else dispatch(setShowModalLogin(true))
}

export const setNickNameLS = (name: string, dispatch: AppDispatch) => {
	const json = JSON.stringify(name)
	localStorage.setItem('userName', json)

	dispatch(setUserId(name))
	setTimeout(() => dispatch(setShowModalLogin(false)), 800)
}