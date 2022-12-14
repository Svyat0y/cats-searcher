import { Status }                     from '../voting/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUpload }                    from './type'


const initialState: IUpload = {
	showModal: false,
	overlay: false,
	status: Status.PENDING
}

export const uploadingSlice = createSlice({
	name: 'uploadingSlice',
	initialState,
	reducers: {
		setShowModal: (state, action: PayloadAction<boolean>) => {
			state.showModal = action.payload
		},
		setShowOverlay: (state, action: PayloadAction<boolean>) => {
			state.overlay = action.payload
		}
	}
})

export const { setShowModal, setShowOverlay } = uploadingSlice.actions

export default uploadingSlice.reducer