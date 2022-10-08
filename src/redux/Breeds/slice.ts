import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status }                     from '../voting/types'
import { fetchSingleBreed }           from './asyncActions'
import { IBreeds, TSingleBreed }      from './types'


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
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSingleBreed.pending, (state) => {
			state.status = Status.PENDING
		})
		builder.addCase(fetchSingleBreed.fulfilled, (state) => {
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchSingleBreed.rejected, (state) => {
			state.status = Status.ERROR
		})
	}

})

export const { setSingleBreed, setActiveBreedName } = breedsSlice.actions

export default breedsSlice.reducer