import { createSlice, PayloadAction }                       from '@reduxjs/toolkit'
import { fetchVoteImg }                                     from './asyncActions'
import { IVote, Status, TData, TDataObj, TInfoInfoMessage } from './types'

import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: IVote = {
	voteData: null,
	likeData: null,
	likePage: 0,
	favPage: 0,
	favoritesData: null,
	unlikeData: [],
	onFavourites: [],
	infoMessage: [],
	activeButton: '',
	status: Status.PENDING,
}

export const votingSlice = createSlice({
	name: 'voting',
	initialState,
	reducers: {
		setToLike: (state, action: PayloadAction<TData[] | null>) => {
			state.likeData = action.payload
		},
		setToUnlike: (state, action: PayloadAction<TDataObj | null>) => {
			state.unlikeData = [ ...state.unlikeData, action.payload ]
		},
		setToFavourites: (state, action: PayloadAction<TDataObj>) => {
			state.onFavourites = [ ...state.onFavourites, action.payload ]
		},
		setToFavoritesData: (state, action: PayloadAction<TData[] | null>) => {
			state.favoritesData = action.payload
		},
		deleteFavouritesItem: (state, action: PayloadAction<string | undefined>) => {
			state.onFavourites = state.onFavourites.filter(el => el?.id !== action.payload)
		},
		deleteFromFavouritesData: (state, action: PayloadAction<number | undefined>) => {
			if (state.favoritesData) state.favoritesData = state.favoritesData.filter(el => el?.id !== action.payload)
		},
		setInfoMessage: (state, action: PayloadAction<TInfoInfoMessage>) => {
			if (Array.isArray(action.payload)) state.infoMessage = action.payload
			else{
				state.infoMessage = [ action.payload, ...state.infoMessage ]
				if (state.infoMessage.length > 4) state.infoMessage.pop()
			}
		},
		setFavPage: (state, action: PayloadAction<number>) => {
			state.favPage = action.payload
		},
		setLikePage: (state, action: PayloadAction<number>) => {
			state.likePage = action.payload
		},
		setActiveBtn: (state, action: PayloadAction<string>) => {
			state.activeButton = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchVoteImg.pending, (state) => {
			state.voteData = null
			state.status = Status.PENDING
		})
		builder.addCase(fetchVoteImg.fulfilled, (state, action) => {
			if (action.payload) state.voteData = action.payload
			state.status = Status.SUCCESS
		})
			.addMatcher(isPendingAction, (state) => {
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

export const {
	setToLike,
	setToUnlike,
	setInfoMessage,
	setToFavourites,
	deleteFavouritesItem,
	setToFavoritesData,
	deleteFromFavouritesData,
	setLikePage,
	setFavPage,
	setActiveBtn,
} = votingSlice.actions

export default votingSlice.reducer
