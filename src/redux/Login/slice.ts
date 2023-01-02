import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin }                     from './types'


const initialState: ILogin = {
	userId: '',
	showModalLogin: false,
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUserId: (state, action: PayloadAction<string>) => {
			state.userId = action.payload
		},
		setShowModalLogin: (state, action: PayloadAction<boolean>) => {
			state.showModalLogin = action.payload
		}
	}
})

export const { setUserId, setShowModalLogin } = loginSlice.actions

export default loginSlice.reducer