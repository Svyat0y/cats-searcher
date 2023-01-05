import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearch, TSearchData }       from './types'
import { Status }                     from '../voting/types'
import { TBreedOption }               from '../Breeds/types'

import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: ISearch = {
	searchData: null,
	isError: false,
	searchValue: '',
	breedsList: [],
	breedFilters: {
		value: 'All breeds',
		limit: '5',
		order: 'asc',
		page: 0,
		type: '',
	},
	galleryFilters: {
		value: 'None',
		limit: '5',
		order: 'random',
		page: 0,
		type: 'all',
	},
	isLoadingData: true,
	status: Status.PENDING,
}

export const searchingSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setToSearchData: (state, action: PayloadAction<TSearchData[] | null>) => {
			state.searchData = action.payload
		},
		setToSearchGallery: (state, action: PayloadAction<TSearchData[] | null>) => {
			state.searchData = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string | null>) => {
			state.searchValue = action.payload
		},
		setFilters: (state, action) => {
			if (action.payload) state.breedFilters = action.payload
		},
		setGalleryFilters: (state, action) => {
			if (action.payload) state.galleryFilters = action.payload
		},
		setToBreedList: (state, action: PayloadAction<TBreedOption[]>) => {
			state.breedsList = action.payload
		},
		setIsLoadingData: (state, action: PayloadAction<boolean>) => {
			state.isLoadingData = action.payload
		},
		setIsError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload
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
	setFilters,
	setGalleryFilters,
	setIsLoadingData,
	setIsError,
} = searchingSlice.actions

export default searchingSlice.reducer