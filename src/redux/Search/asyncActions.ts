import { instance }         from '../../api/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setToSearchData }  from './slice'


const fetchSearchRightObjects = async (reference_image_id: string) => {
	const { data } = await instance.get<any>(`images/${ reference_image_id }`)
	const { id, url } = data
	const { name } = data.breeds

	return { id, url, name }
}

export const fetchSearch = createAsyncThunk<void, string>(
	'search',
	async (search, { dispatch }) => {
		try {
			const { data } = await instance.get<any>(`breeds/search/?q=${ search }`)
			const newData = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
				return fetchSearchRightObjects(reference_image_id)
			}))
			dispatch(setToSearchData(newData))
		}
		catch (e: any) {
			console.log(e.message)
		}
	}
)