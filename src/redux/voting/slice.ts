import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchVoteImg }               from './asyncActions'

import { TDataObj, IVoteData, Status, TInfoInfoMessage, TFavouritesData, TLikesData } from './types'
import { isFulfilledAction, isPendingAction, isRejectedAction }                       from './utilsAction'


const initialState: IVoteData = {
	userId: 'user-001',
	voteData: null,
	likeData: [],
	favoritesData: [],
	unlikeData: [],
	onFavourites: [],
	infoMessage: [],
	status: Status.PENDING,
}

export const votingSlice = createSlice({
	name: 'voting',
	initialState,
	reducers: {
		setToLike: (state, action: PayloadAction<TLikesData[]>) => {
			state.likeData = action.payload
		},
		setToUnlike: (state, action: PayloadAction<TDataObj>) => {
			state.unlikeData = [ ...state.unlikeData, action.payload ]
		},
		setToFavourites: (state, action: PayloadAction<TDataObj>) => {
			state.onFavourites = [ ...state.onFavourites, action.payload ]
		},
		setToFavoritesData: (state, action: PayloadAction<TFavouritesData[]>) => {
			state.favoritesData = action.payload
		},
		deleteFavouritesItem: (state, action: PayloadAction<string | undefined>) => {
			state.onFavourites = state.onFavourites.filter(el => el?.id !== action.payload)
		},
		deleteFromFavouritesData: (state, action: PayloadAction<number>) => {
			state.favoritesData = state.favoritesData.filter(el => el?.id !== action.payload)
		},
		setInfoMessage: (state, action: PayloadAction<TInfoInfoMessage>) => {
			state.infoMessage = [ ...state.infoMessage, action.payload ]
		}
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
	deleteFromFavouritesData
} = votingSlice.actions

export default votingSlice.reducer
