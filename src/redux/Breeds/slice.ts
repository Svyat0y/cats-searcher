import { createSlice, PayloadAction }          from '@reduxjs/toolkit'
import { IBreeds, TBreedOption, TSingleBreed } from './types'
import { Status }                              from '../voting/types'

import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: IBreeds = {
	singleBreed: [],
	breedsList: [],
	activeBreedName: '',
	value: 'All breeds',
	limit: '5',
	order: 'asc',
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
		setToBreedList: (state, action: PayloadAction<TBreedOption[]>) => {
			if (action.payload.length === 1) state.breedsList = action.payload
			else state.breedsList = [ { value: 'All', label: 'All breeds' }, ...action.payload ]
		},
		setToValue: (state, action: PayloadAction<string>) => {
			if (action.payload) state.value = action.payload
		},
		setToLimit: (state, action: PayloadAction<string>) => {
			if (action.payload) state.limit = action.payload
		},
		setActiveSortBtn: (state, action: PayloadAction<string>) => {
			state.order = action.payload
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

export const { setSingleBreed, setActiveBreedName, setToBreedList, setToValue, setToLimit, setActiveSortBtn } = breedsSlice.actions

export default breedsSlice.reducer