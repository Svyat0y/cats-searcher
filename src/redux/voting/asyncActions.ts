import { instance }                                          from '../../services/api/api'
import { createAsyncThunk }                                  from '@reduxjs/toolkit'
import { TData, TDataImgVoted, TDataObj, TVotingFavourites } from './types'

import { RootState } from '../store'
import {
	deleteFavouritesItem,
	deleteFromFavouritesData,
	setFavPage,
	setInfoMessage,
	setToFavoritesData,
	setToFavourites,
	setToLike,
	setToUnlike
}                    from './slice'

import { setLsMessages } from '../../services/localStorage/infoMessageLS'
import { setIsError }    from '../Search/slice'


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
	async (_, { dispatch }) => {
		try {
			dispatch(setIsError(false))
			const { data } = await instance.get<TDataObj[]>('images/search?limit=1&size=full&mime_types=gif,jpg,png')
			return data[0]
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}
	})

export const fetchVote = createAsyncThunk<void, [ imgObj: TDataObj, value: number ], { state: RootState }>(
	'votingSlice/fetchVote',
	async (params, thunkAPI) => {
		const [ imgObj, value ] = params
		const dispatch = thunkAPI.dispatch
		const { userId } = thunkAPI.getState().loginSlice
		const body = {
			image_id: imgObj?.id,
			sub_id: userId,
			value: value,
		}

		try {
			const { status, data } = await instance.post<TDataImgVoted>('votes', body)
			if (status.toString()[0] === '2') {
				const newDate = getDate()

				if (value === 1) {
					const message = { id: data.image_id, message: 'was added to Likes', time: newDate }
					dispatch(setInfoMessage(message))
					setLsMessages(message)
				}
				if (value === 0) {
					const message = { id: data.image_id, message: 'was added to Dislikes', time: newDate }
					dispatch(setToUnlike(imgObj))
					dispatch(setInfoMessage(message))
					setLsMessages(message)
				}
				dispatch(fetchVoteImg())
			}
		}
		catch (e: any) {
			console.log(e.message)
		}
	})

export const fetchActionFavourite = createAsyncThunk<void, TDataObj, { state: RootState }>(
	'voting/fetchActionFavourite',
	async (imgObj, thunkAPI) => {
		const { userId } = thunkAPI.getState().loginSlice
		const dispatch = thunkAPI.dispatch

		const body = {
			image_id: imgObj?.id,
			sub_id: userId
		}
		try {
			const { status } = await instance.post<TVotingFavourites>('favourites', body)
			if (status.toString()[0] === '2') {
				const newDate = getDate()
				const message = { id: imgObj?.id, message: 'was added to Favourites', time: newDate }
				dispatch(setToFavourites(imgObj))
				dispatch(setInfoMessage(message))
				setLsMessages(message)
			}
		}
		catch (e: any) {
			console.log(e.message)
		}
	}
)

export const fetchDeleteFromFav = createAsyncThunk<void, TData, { state: RootState }>(
	'voting/fetchDeleteFromFav',
	async (imgObj, thunkAPI) => {
		const dispatch = thunkAPI.dispatch
		const { favoritesData, favPage } = thunkAPI.getState().votingSlice

		try {
			const { status } = await instance.delete<TVotingFavourites>(`favourites/${ imgObj?.id }`)
			if (status.toString()[0] === '2') {
				if (favoritesData?.length === 1 && favPage > 0) {
					dispatch(setFavPage(favPage - 1))
					dispatch(fetchGetFavourites())
				}
				setTimeout(() => {
					const newDate = getDate()
					const message = { id: imgObj?.image_id, message: 'was deleted from Favourites', time: newDate }
					dispatch(deleteFavouritesItem(imgObj?.image_id))
					dispatch(deleteFromFavouritesData(imgObj?.id))
					dispatch(setInfoMessage(message))
					setLsMessages(message)
				}, 0)
			}
		}
		catch (e: any) {
			console.log(e.message)
		}
	}
)

export const fetchGetFavourites = createAsyncThunk<void, void, { state: RootState }>(
	'voting/fetchGetFavourites',
	async (_, { dispatch, getState }) => {
		const { favPage } = getState().votingSlice
		const { userId } = getState().loginSlice
		try {
			dispatch(setIsError(false))
			const { data } = await instance.get<TData[]>(`favourites?sub_id=${ userId }&page=${ favPage }&limit=15&order=DESC`)
			dispatch(setToFavoritesData(data))
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}
	}
)

export const fetchGetLikes = createAsyncThunk<void, void, { state: RootState }>(
	'voting/fetchGetLikes',
	async (_, { dispatch, getState }) => {
		const { likePage } = getState().votingSlice
		const { userId } = getState().loginSlice

		try {
			dispatch(setIsError(false))
			const { data } = await instance.get<TData[]>(`votes?sub_id=${ userId }&page=${ likePage }&limit=15&order=DESC`,)
			dispatch(setToLike(data))
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}
	}
)
