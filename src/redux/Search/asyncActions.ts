import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'

import { setToSearchData } from './slice'
import { TSearchData }     from './types'
import { RootState }       from '../store'


const fetchSearchRightObjects = async (reference_image_id: string) => {
	const { data } = await instance.get<any>(`images/${ reference_image_id }`)
	const { id, url } = data
	const { name, id: breedId } = data.breeds[0]

	return { id, url, name, breedId }
}

export const fetchSearch = createAsyncThunk<void, { value: string, limit?: string, }, { state: RootState }>(
	'fetchSearch',
	async (params, { dispatch }) => {

		try {
			const { data } = await instance.get<any>(`breeds/search/?q=${ params.value }&limit=${ Number(params.limit) } }`)
			const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
				return fetchSearchRightObjects(reference_image_id)
			}))
			dispatch(setToSearchData(newData))
		}
		catch (e: any) {
			console.log(e.message)
		}
	}
)
