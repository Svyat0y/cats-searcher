import { createSlice, PayloadAction }                                             from '@reduxjs/toolkit'
import { fetchVoteImg }                                                           from './asyncActions'
import { IVote, Status, TDataObj, TFavouritesData, TInfoInfoMessage, TLikesData } from './types'

import { isFulfilledAction, isPendingAction, isRejectedAction } from '../utilsAction'


const initialState: IVote = {
	userId: 'user-001',
	voteData: null,
	likeData: null,
	likePage: 0,
	favoritesData: null,
	favPage: 0,
	unlikeData: [],
	onFavourites: [],
	infoMessage: [],
	activeButton: '',
	isFavMounted: false,
	isLikesMounted: false,
	isDislikesMounted: false,
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
		setNextFavPage: (state) => {
			state.favPage = state.favPage + 1
		},
		setPrevFavPage: (state) => {
			if ((state.favPage - 1) < 0) state.favPage = 0
			else state.favPage = state.favPage - 1
		},
		setNextLikePage: (state) => {
			state.likePage = state.likePage + 1
		},
		setPrevLikePage: (state) => {
			if ((state.likePage - 1) < 0) state.likePage = 0
			else state.likePage = state.likePage - 1
		},
		setActiveBtn: (state, action: PayloadAction<string>) => {
			state.activeButton = action.payload
		},
		setIsFavMounted: (state, action: PayloadAction<boolean>) => {
			state.isFavMounted = action.payload
		},
		setIsLikesMounted: (state, action: PayloadAction<boolean>) => {
			state.isLikesMounted = action.payload
		},
		setIsDislikesMounted: (state, action: PayloadAction<boolean>) => {
			state.isDislikesMounted = action.payload
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
	deleteFromFavouritesData,
	setNextFavPage,
	setPrevFavPage,
	setNextLikePage,
	setPrevLikePage,
	setActiveBtn,
	setIsFavMounted,
	setIsLikesMounted,
	setIsDislikesMounted,
} = votingSlice.actions

export default votingSlice.reducer
