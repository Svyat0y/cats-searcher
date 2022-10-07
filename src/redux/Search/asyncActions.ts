import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'

import { setToSearchData } from './slice'
import { TSearchData }     from './types'


const fetchSearchRightObjects = async (reference_image_id: string) => {
	const { data } = await instance.get<any>(`images/${ reference_image_id }`)
	const { id, url } = data
	const { name } = data.breeds[0]

	return { id, url, name }
}

export const fetchSearch = createAsyncThunk<void, string>(
	'search',
	async (search, { dispatch }) => {
		try {
			const { data } = await instance.get<any>(`breeds/search/?q=${ search }`)
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
/*
export const fetchBreeds = createAsyncThunk<void>(
	'search',
	async (_, { dispatch }) => {
		try {
			const { data } = await instance.get<any>('breeds')
			const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
				return fetchSearchRightObjects(reference_image_id)
			}))
			dispatch(setToSearchData(newData))
		}
		catch (e: any) {
			console.log(e.message)
		}
	}
)*/
