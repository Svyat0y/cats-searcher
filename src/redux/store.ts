import { configureStore } from '@reduxjs/toolkit'
import { useDispatch }    from 'react-redux'

import themeSlice      from './theme/slice'
import votingSlice     from './voting/slice'
import searchingSlice  from './Search/slice'
import breedsSlice     from './Breeds/slice'
import uploadSlice     from './Upload/slice'
import loginSlice      from './Login/slice'
import mobileMenuSlice from './MobileMenu/slice'


export const store = configureStore({
	reducer: {
		themeSlice,
		votingSlice,
		searchingSlice,
		breedsSlice,
		uploadSlice,
		loginSlice,
		mobileMenuSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
