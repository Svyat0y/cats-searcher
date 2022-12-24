import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITheme, IThemeSlice }        from './types'


const initialState: IThemeSlice = {
	theme: 'dark'
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<ITheme>) => {
			if (action.payload === 'dark') state.theme = 'dark'
			else state.theme = 'light'
		}
	}
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer
