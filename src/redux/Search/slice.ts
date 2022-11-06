import { createSlice, PayloadAction }                           from '@reduxjs/toolkit'
import { ISearch, TSearchData }                                 from './types'
import { Status }                                               from '../voting/types'
import { TBreedOption }                                         from '../Breeds/types'
import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: ISearch = {
	searchData: null,
	searchValue: '',
	breedsList: [],
	filters: {
		value: 'All breeds',
		limit: '5',
		order: 'asc',
		page: 0,
	},
	status: Status.PENDING,
}

export const searchingSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setToSearchData: (state, action: PayloadAction<TSearchData[] | null>) => {
			state.searchData = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string | null>) => {
			state.searchValue = action.payload
		},
		setFilters: (state, action) => {
			if (action.payload) state.filters = action.payload
		},
		setToBreedList: (state, action: PayloadAction<TBreedOption[]>) => {
			// if (action.payload.length === 1) state.breedsList = action.payload
			state.breedsList = [ { value: 'All', label: 'All breeds' }, ...action.payload ]
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(isPendingAction, (state) => {
				state.status = Status.PENDING
			})
			.addMatcher(isFulfilledAction, (state) => {
				if (state.searchData) state.status = Status.SUCCESS
			})
			.addMatcher(isRejectedAction, (state) => {
				state.status = Status.ERROR
			})
	}
})

export const {
	setToSearchData,
	setSearchValue,
	setToBreedList,
	setFilters
} = searchingSlice.actions

export default searchingSlice.reducer