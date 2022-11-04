import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchSearch }                from './asyncActions'
import { ISearch, TSearchData }       from './types'
import { Status }                     from '../voting/types'
import { TBreedOption }               from '../Breeds/types'


const initialState: ISearch = {
	searchData: null,
	searchValue: '',
	breedsList: [],
	value: 'All breeds',
	limit: '5',
	order: 'asc',
	page: 0,
	status: Status.SUCCESS,
}

export const searchingSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setToSearchData: (state, action: PayloadAction<TSearchData[] | null>) => {
			state.searchData = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload
		},
		setToValue: (state, action: PayloadAction<string>) => {
			if (action.payload) state.value = action.payload
		},
		setToLimit: (state, action: PayloadAction<string>) => {
			if (action.payload) state.limit = action.payload
		},
		setOrder: (state, action: PayloadAction<string>) => {
			state.order = action.payload
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setToBreedList: (state, action: PayloadAction<TBreedOption[]>) => {
			if (action.payload.length === 1) state.breedsList = action.payload
			else state.breedsList = [ { value: 'All', label: 'All breeds' }, ...action.payload ]
		},
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

export const { setToSearchData, setSearchValue, setPage, setOrder, setToLimit, setToValue, setToBreedList } = searchingSlice.actions

export default searchingSlice.reducer