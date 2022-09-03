import { configureStore } from '@reduxjs/toolkit'
import { useDispatch }    from 'react-redux'

import themeSlice  from './theme/slice'
import votingSlice from './voting/slice'


export const store = configureStore({
	reducer: {
		themeSlice,
		votingSlice
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store
