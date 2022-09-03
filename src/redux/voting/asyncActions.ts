import { instance }                  from '../../api/api'
import { createAsyncThunk }          from '@reduxjs/toolkit'
import { dataObj }                   from './types'
import { setInfoMessage, setToLike } from './slice'


export const fetchVoteImg = createAsyncThunk<dataObj>(
	'votingSlice/fetchVoteImg',
	async () => {
		const { data } = await instance.get<dataObj[]>('images/search?limit=1&size=full&mime_types=gif,jpg,png')
		return data[0]
	})

export const fetchVote = createAsyncThunk(
	'votingSlice/fetchVote',
	async (params: [ imgObj: dataObj | null, value: number ], thunkAPI) => {
		const [ imgObj, value ] = params
		const dispatch = thunkAPI.dispatch
		let body
		if (imgObj) {
			body = {
				image_id: imgObj.id,
				value: value,
			}
		}
		try {
			const { status, data } = await instance.post('votes', body)
			if (status.toString()[0] === '2') {
				imgObj && dispatch(setToLike(imgObj))
				value === 1 && dispatch(setInfoMessage({ id: data.image_id, message: 'Likes', date: new Date() }))
			}
		}
		catch (e) {
			console.log(e)
		}
	})
