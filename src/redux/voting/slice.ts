import { createSlice, PayloadAction }            from '@reduxjs/toolkit'
import { dataObj, IVoteData, Status, TInfoLike } from './types'
import { fetchVoteImg }                          from './asyncActions'


const initialState: IVoteData = {
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
		setToLike: (state, action: PayloadAction<dataObj>) => {
			state.likeData = [ ...state.likeData, action.payload ]
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
			state.voteData = action.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchVoteImg.rejected, (state) => {
			state.voteData = null
			state.status = Status.ERROR
		})
	}
})

export const { setToLike, setInfoMessage } = votingSlice.actions

export default votingSlice.reducer
