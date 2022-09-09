import { instance }                                                                      from '../../api/api'
import { RootState }                                                                     from '../store'
import { createAsyncThunk }                                                              from '@reduxjs/toolkit'
import { TDataImgVoted, TDataObj, TVotingFavourites }                                    from './types'
import { deleteFavouritesItem, setInfoMessage, setToFavourites, setToLike, setToUnlike } from './slice'


const getDate = () => {
	const date = new Date()
	const newDate = [
		'0' + date.getHours(),
		'0' + date.getMinutes()
	].map(el => el.slice(-2))

	return newDate.join(':')
}

export const fetchVoteImg = createAsyncThunk<TDataObj | undefined>(
	'votingSlice/fetchVoteImg',
	async () => {
		try {
			const { data } = await instance.get<TDataObj[]>('images/search?limit=1&size=full&mime_types=gif,jpg,png')
			return data[0]
		}
		catch (e) {
			console.log(e)
		}
	})

export const fetchVote = createAsyncThunk<void, [ imgObj: TDataObj, value: number ], { state: RootState }>(
	'votingSlice/fetchVote',
	async (params, thunkAPI) => {
		const [ imgObj, value ] = params
		const dispatch = thunkAPI.dispatch
		const { userId } = thunkAPI.getState().votingSlice
		const body = {
			image_id: imgObj?.id,
			sub_id: userId,
			value: value,
		}

		try {
			const { status, data } = await instance.post<TDataImgVoted>('votes/', body)
			console.log(data)
			if (status.toString()[0] === '2') {
				const newDate = getDate()

				if (value) {
					imgObj && dispatch(setToLike(imgObj))
					value && dispatch(setInfoMessage({ id: data.image_id, message: 'was added to Likes', time: newDate }))
				}
				if (!value) {
					imgObj && dispatch(setToUnlike(imgObj))
					!value && dispatch(setInfoMessage({ id: data.image_id, message: 'was added to Dislikes.tsx', time: newDate }))
				}
			}
		}
		catch (e) {
			console.log(e)
		}
	})

let objIdFromRequest: number
export const fetchFavourite = createAsyncThunk<void, TDataObj, { state: RootState }>(
	'voting/fetchFavourite',
	async (imgObj, thunkAPI) => {
		const votingState = thunkAPI.getState().votingSlice
		const dispatch = thunkAPI.dispatch
		const foundObjInFavorite = votingState.favouriteData.find((el: TDataObj) => el?.id === imgObj?.id)
		const favouritedId = imgObj?.id

		const body = {
			image_id: imgObj?.id,
			sub_id: votingState.userId
		}
		try {
			if (!foundObjInFavorite) {
				const { status, data } = await instance.post<TVotingFavourites>('favourites', body)
				objIdFromRequest = data.id
				if (status.toString()[0] === '2') {
					const newDate = getDate()
					dispatch(setToFavourites(imgObj))
					dispatch(setInfoMessage({ id: imgObj?.id, message: 'was added to Favourites', time: newDate }))
				}
			}
			else{
				const { status } = await instance.delete<TVotingFavourites>(`favourites/${ objIdFromRequest }`,)
				if (status.toString()[0] === '2') {
					const newDate = getDate()
					dispatch(deleteFavouritesItem(favouritedId))
					dispatch(setInfoMessage({ id: imgObj?.id, message: 'was deleted from Favourites', time: newDate }))
				}
			}
		}
		catch (e) {
			console.log(e)
		}
	}
)
