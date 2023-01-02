import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status }                     from '../voting/types'
import { IUpload }                    from './types'

import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: IUpload = {
	showModalUpload: false,
	isLoaded: false,
	message: '',
	status: Status.PENDING
}

export const uploadingSlice = createSlice({
	name: 'uploadingSlice',
	initialState,
	reducers: {
		setShowModalUpload: (state, action: PayloadAction<boolean>) => {
			state.showModalUpload = action.payload
		},
		setMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload
		},
		setIsLoaded: (state, action: PayloadAction<boolean>) => {
			state.isLoaded = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(isPendingAction, (state) => {
				state.status = Status.PENDING
			})
			.addMatcher(isFulfilledAction, (state) => {
				state.status = Status.SUCCESS
			})
			.addMatcher(isRejectedAction, (state) => {
				state.status = Status.ERROR
			})
	}
})

export const { setShowModalUpload, setMessage, setIsLoaded } = uploadingSlice.actions

export default uploadingSlice.reducer