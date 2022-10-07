import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status }                     from '../voting/types'
import { fetchSearch }                from './asyncActions'
import { ISearch }                    from './types'


const initialState: ISearch = {
	searchData: null,
	status: Status.PENDING,
}


export const searchingSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setToSearchData: (state, action: PayloadAction<any>) => {
			state.searchData = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSearch.pending, (state, action) => {
			state.status = Status.PENDING
		})
		builder.addCase(fetchSearch.fulfilled, (state, action) => {
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchSearch.rejected, (state, action) => {
			state.status = Status.ERROR
		})
	}
})

export const { setToSearchData } = searchingSlice.actions

export default searchingSlice.reducer