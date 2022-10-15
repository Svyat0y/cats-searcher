import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchSearch }                from './asyncActions'

import { ISearch, TSearchData } from './types'
import { Status }               from '../voting/types'


const initialState: ISearch = {
	searchData: null,
	status: Status.SUCCESS,
	isSearchMounted: false
}


export const searchingSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setToSearchData: (state, action: PayloadAction<TSearchData[]>) => {
			state.searchData = action.payload
		},
		setIsSearchMounted: (state, action: PayloadAction<boolean>) => {
			state.isSearchMounted = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSearch.pending, (state) => {
			state.status = Status.PENDING
		})
		builder.addCase(fetchSearch.fulfilled, (state) => {
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchSearch.rejected, (state) => {
			state.status = Status.ERROR
		})
	}
})

export const { setToSearchData, setIsSearchMounted } = searchingSlice.actions

export default searchingSlice.reducer