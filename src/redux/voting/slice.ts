import { createSlice, PayloadAction }             from '@reduxjs/toolkit'
import { TDataObj, IVoteData, Status, TInfoLike } from './types'
import { fetchVoteImg }                           from './asyncActions'

import { isFulfilledAction, isPendingAction, isRejectedAction } from './utilsAction'


const initialState: IVoteData = {
	userId: 'user-001',
	voteData: null,
	likeData: [],
	unlikeData: [],
	favoriteData: [],
	infoLikes: [],
	status: Status.PENDING
}

export const votingSlice = createSlice({
	name: 'voting',
	initialState,
	reducers: {
		setToLike: (state, action: PayloadAction<TDataObj>) => {
			state.likeData = [ ...state.likeData, action.payload ]
		},
		setToUnlike: (state, action: PayloadAction<TDataObj>) => {
			state.unlikeData = [ ...state.unlikeData, action.payload ]
		},
		setToFavourites: (state, action: PayloadAction<TDataObj>) => {
			state.favoriteData = [ ...state.favoriteData, action.payload ]
		},
		deleteFavouritesItem: (state, action: PayloadAction<string | undefined>) => {
			state.favoriteData = state.favoriteData.filter(el => el?.id !== action.payload)
		},
		setInfoMessage: (state, action: PayloadAction<TInfoLike>) => {
			state.infoLikes = [ ...state.infoLikes, action.payload ]
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

export const { setToLike, setToUnlike, setInfoMessage, setToFavourites, deleteFavouritesItem } = votingSlice.actions

export default votingSlice.reducer
