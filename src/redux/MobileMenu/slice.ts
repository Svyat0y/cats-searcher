import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMobileMenuSlice }           from './types'


const initialState: IMobileMenuSlice = {
	isOpen: false
}

export const mobileMenuSlice = createSlice({
	name: 'mobileMenu',
	initialState,
	reducers: {
		setIsOpen: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload
		},
	},
})

export const { setIsOpen } = mobileMenuSlice.actions

export default mobileMenuSlice.reducer