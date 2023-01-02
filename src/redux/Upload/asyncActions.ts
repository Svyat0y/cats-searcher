import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../services/api/api'

import { RootState }               from '../store'
import { setIsLoaded, setMessage } from './slice'


export const fetchUploadImage = createAsyncThunk<void, File | null, { state: RootState }>(
	'fetchUploadImage',
	async (file, { dispatch, getState }) => {
		const body = {
			file,
			sub_id: getState().loginSlice.userId
		}
		try {
			const { data } = await instance.post('images/upload', body, {
				headers: {
					'content-type': 'multipart/form-data'
				}
			})
			if (data.approved === 1) {
				dispatch(setIsLoaded(true))
				dispatch(setMessage('Thanks for the Upload - Cat found!'))
			}
		}
		catch (e: any) {
			if (e.response.status === 400) {
				console.log(e.message)
				dispatch(setIsLoaded(false))
				dispatch(setMessage('No Cat found - try a different one'))
			}
		}
	}
)