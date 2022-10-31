import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBreeds, TSingleBreed }      from './types'
import { Status }                     from '../voting/types'

import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: IBreeds = {
	singleBreed: [],
	activeBreedName: '',
	status: Status.SUCCESS,
}

export const breedsSlice = createSlice({
	name: 'breeds',
	initialState,
	reducers: {
		setSingleBreed: (state, action: PayloadAction<TSingleBreed[]>) => {
			state.singleBreed = action.payload
		},
		setActiveBreedName: (state, action: PayloadAction<string>) => {
			state.activeBreedName = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(isPendingAction, (state) => {
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

export const { setSingleBreed, setActiveBreedName } = breedsSlice.actions

export default breedsSlice.reducer