import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'
import { setSingleBreed }   from './slice'
import { TSingleBreed }     from './types'


export const fetchSingleBreed = createAsyncThunk<void, string>(
	'fetchSingleBreed',
	async (breedId, { dispatch }) => {
		try {
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
		}
		catch (e: any) {
			console.log(e.message())
		}
	}
)