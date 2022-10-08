import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance }         from '../../api/api'
import { setSingleBreed }   from './slice'
import { TSingleBreed }     from './types'


export const fetchSingleBreed = createAsyncThunk<void, string>(
	'fetchSingleBreed',
	async (breedId, { dispatch }) => {
		try {
			const { data } = await instance.get<any>(`breeds?limit=8&size=full&breed_id=${ breedId }`)
			const newData: TSingleBreed[] = await Promise.all(data.map((el: any) => {
				return {
					id: el.id,
					desc: el.description,
					origin: el.origin,
					weight: el.weight.metric,
					life_span: el.life_span,
					image: el.image.url,
					temperament: el.temperament,
				}
			}))
			dispatch(setSingleBreed(newData))
		}
		catch (e: any) {
			console.log(e.message())
		}
	}
)