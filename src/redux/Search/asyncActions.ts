import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit'
import { instance }                   from '../../services/api/api'
import { TSearchData }                from './types'

import { RootState }                                     from '../store'
import { setIsError, setIsLoadingData, setToSearchData } from './slice'


const fetchSearchRightObjects = async (reference_image_id: string, dispatch: Dispatch) => {
	if (!reference_image_id) return

	try {
		const { data } = await instance.get<any>(`images/${ reference_image_id }`)
		const { id, url } = data
		const { name, id: breedId } = data.breeds[0]

		return { id, url, name, breedId }
	}
	catch (e: any) {
		console.log(e.message)
		if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
			dispatch(setIsError(true))
		}
	}
}

export const fetchSearch = createAsyncThunk<void, void, { state: RootState }>(
	'fetchSearch',
	async (_, { dispatch, getState }) => {
		const { breedFilters: { value, limit, order, page } } = getState().searchingSlice
		const query = `order=${ order }&limit=${ limit }&page=${ page }`

		try {
			dispatch(setIsError(false))
			dispatch(setIsLoadingData(true))
			if (value === 'All breeds') {
				const { data } = await instance.get<any>(`breeds?${ query }`)
				const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
					return fetchSearchRightObjects(reference_image_id, dispatch)
				}))
				dispatch(setToSearchData(newData))
			}
			else{
				const { data } = await instance.get<any>(`breeds/search/?q=${ value }&${ query }`)
				const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
					return fetchSearchRightObjects(reference_image_id, dispatch)
				}))
				dispatch(setToSearchData(newData))
			}
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}

	}
)


const getType = (type: string) => {
	switch (type) {
		case 'static' :
			return 'jpg,png'

		case 'animated' :
			return 'gif'

		default :
			return 'jpg,png,gif'
	}
}

export const fetchGallerySearch = createAsyncThunk<void, void, { state: RootState }>(
	'fetchGallerySearch',
	async (_, { dispatch, getState }) => {
		const { galleryFilters: { value, limit, order, page, type } } = getState().searchingSlice
		const currentType = getType(type)
		const query = `limit=${ limit }&mime_types=${ currentType }&order=${ order }&size=small&page=${ page }`

		try {
			dispatch(setIsError(false))

			if (value === 'None') {
				const { data } = await instance.get<any>(`images/search?${ query }`)
				dispatch(setToSearchData(data))
			}
			else{
				const { data } = await instance.get<any>(`images/search?${ query }&breed_ids=${ value }`)
				dispatch(setToSearchData(data))
			}
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}

	}
)

export const fetchSearchFromPanel = createAsyncThunk<void, void, { state: RootState }>(
	'fetchSearchFromPanel',
	async (_, { dispatch, getState }) => {
		const { breedFilters: { value } } = getState().searchingSlice

		try {
			dispatch(setIsError(false))
			const { data } = await instance.get<any>(`breeds/search/?q=${ value }`)
			const newData: TSearchData[] = await Promise.all(data.map(({ reference_image_id }: { reference_image_id: string }) => {
				return fetchSearchRightObjects(reference_image_id, dispatch)
			}))
			dispatch(setToSearchData(newData))
		}
		catch (e: any) {
			console.log(e.message)
			if (e.response.status.toString()[0] === '4' || e.response.status.toString()[0] === '5') {
				dispatch(setIsError(true))
			}
		}

	}
)
