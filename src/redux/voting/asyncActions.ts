import { instance }                  from '../../api/api'
import { createAsyncThunk }          from '@reduxjs/toolkit'
import { TDataImgVoted, TDataObj }   from './types'
import { setInfoMessage, setToLike } from './slice'


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

export const fetchVote = createAsyncThunk(
	'votingSlice/fetchVote',
	async (params: [ imgObj: TDataObj, value: number ], thunkAPI) => {
		const [ imgObj, value ] = params
		const dispatch = thunkAPI.dispatch
		const body = {
			image_id: imgObj?.id,
			value: value,
		}

		try {
			const { status, data } = await instance.post<TDataImgVoted>('votes', body)
			console.log(data)
			if (status.toString()[0] === '2') {
				const newDate = getDate()
				imgObj && dispatch(setToLike(imgObj))
				value === 1 && dispatch(setInfoMessage({ id: data.image_id, message: 'Likes', time: newDate }))
				value === 0 && dispatch(setInfoMessage({ id: data.image_id, message: 'Dislikes', time: newDate }))
			}
		}
		catch (e) {
			console.log(e)
		}
	})
