import { configureStore } from '@reduxjs/toolkit'
import { useDispatch }    from 'react-redux'


export const store = configureStore({
	reducer: {},
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store
