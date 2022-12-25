import { createAsyncThunk }           from '@reduxjs/toolkit'
import { instance }                   from '../../services/api/api'
import { TBreedOption, TSingleBreed } from './types'

import { setIsError, setToBreedList } from '../Search/slice'
import { setSingleBreed }             from './slice'


export const fetchSingleBreed = createAsyncThunk<void, string>(
	'fetchSingleBreed',
	async (breedId, { dispatch }) => {
		try {
			dispatch(setIsError(false))
			const { data } = await instance.get<any>(`images/search/?&limit=8&size=full&breed_ids=${ breedId }`)
			const newData: TSingleBreed[] = await Promise.all(data.map((el: any) => {
				return {
					id: el.breeds[0].id,
					name: el.breeds[0].name,
					desc: el.breeds[0].description,
					origin: el.breeds[0].origin,
					weight: el.breeds[0].weight.metric,
					life_span: el.breeds[0].life_span,
					image: el.url,
					temperament: el.breeds[0].temperament,
				}
			}))
			dispatch(setSingleBreed(newData))
			console.log(data)
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}
	}
)

export const fetchBreeds = createAsyncThunk<void, { value: string, label: string }>(
	'fetchBreeds',
	async (obj, { dispatch }) => {
		try {
			const { data } = await instance.get<any>('breeds')
			const newData: TBreedOption[] = await Promise.all(data.map((el: any) => {
				return { value: el.id, label: el.name }
			}))

			dispatch(setToBreedList([ obj, ...newData ]))
		}
		catch (e: any) {
			console.log(e.message)
		}
	}
)