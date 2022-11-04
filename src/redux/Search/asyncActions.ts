import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'
import { TSearchData }      from './types'

import { RootState }                   from '../store'
import { setFilters, setToSearchData } from './slice'


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
		const { filters: { value, limit, order, page } } = getState().searchingSlice

		try {
			if (value === 'All breeds') {
				dispatch(setFilters({
					value: 'All breeds',
					limit,
					order,
					page
				}))
				const { data } = await instance.get<any>(`breeds?order=${ order }&limit=${ Number(limit) }&page=${ page }`)
				const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
					return fetchSearchRightObjects(reference_image_id)
				}))
				dispatch(setToSearchData(newData))
			}
			else{
				const { data } = await instance.get<any>(`breeds/search/?q=${ value }`)
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
