import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'
import { TSearchData }      from './types'

import { RootState }       from '../store'
import { setToSearchData } from './slice'


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
				const { data } = await instance.get<any>(`breeds?order=${ order }&${ limit ? `limit=${ Number(limit) }` : '' }&page=${ page }`)
				const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
					return fetchSearchRightObjects(reference_image_id)
				}))
				dispatch(setToSearchData(newData))
			}
			else{
				const { data } = await instance.get<any>(`breeds/search/?q=${ value }&order=${ order }&limit=${ Number(limit) }&page=${ page }`)
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

export const fetchSearchFromPanel = createAsyncThunk<void, void, { state: RootState }>(
	'fetchSearchFromPanel',
	async (params, { dispatch, getState }) => {
		const { filters: { value } } = getState().searchingSlice

		try {
			const { data } = await instance.get<any>(`breeds/search/?q=${ value }`)
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
