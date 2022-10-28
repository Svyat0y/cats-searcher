import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'

import { setToSearchData } from './slice'
import { TSearchData }     from './types'
import { RootState }       from '../store'
import { setToValue }      from '../Breeds/slice'


const fetchSearchRightObjects = async (reference_image_id: string) => {

	if (!reference_image_id) return

	const { data } = await instance.get<any>(`images/${ reference_image_id }`)
	const { id, url } = data
	const { name, id: breedId } = data.breeds[0]

	return { id, url, name, breedId }
}

export const fetchSearch = createAsyncThunk<void, void, { state: RootState }>(
	'fetchSearch',
	async (params, { dispatch, getState }) => {
		const { value, limit, order } = getState().breedsSlice

		try {
			if (value === 'All breeds') {
				dispatch(setToValue('All breeds'))
				const { data } = await instance.get<any>(`breeds?order=${ order }&limit=${ Number(limit) }`)
				const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
					return fetchSearchRightObjects(reference_image_id)
				}))
				dispatch(setToSearchData(newData))
			}
			else{
				const { data } = await instance.get<any>(`breeds/search/?q=${ value }&order=${ order }&${ limit ? `limit=${ Number(limit) }` : '' }`)
				// dispatch(setToValue(data[0].name))
				const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
					return fetchSearchRightObjects(reference_image_id)
				}))
				dispatch(setToSearchData(newData))
			}
		}
		catch (e: any) {
			console.log(e.message)
		}

	}
)
