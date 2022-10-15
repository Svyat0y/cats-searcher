import { createSlice, PayloadAction }                           from '@reduxjs/toolkit'
import { Status }                                               from '../voting/types'
import { IBreeds, TBreedOption, TSingleBreed }                  from './types'
import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: IBreeds = {
	singleBreed: [],
	breedsList: [],
	activeBreedName: '',
	value: '',
	limit: '5',
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
			state.breedsList = action.payload
		},
		setToValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
		setToLimit: (state, action: PayloadAction<string>) => {
			state.limit = action.payload
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

export const { setSingleBreed, setActiveBreedName, setToBreedList, setToValue, setToLimit } = breedsSlice.actions

export default breedsSlice.reducer