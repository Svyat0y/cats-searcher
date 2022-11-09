import React, { useEffect, useState } from 'react'
import s                              from './Gallery.module.scss'
import { BreedSelect, LimitSelect }   from '../common'
import { useAppDispatch }             from '../../redux/store'
import { useSearchParams }            from 'react-router-dom'
import { useSelector }                from 'react-redux'
import { selectSearch }               from '../../redux/Search/selectors'
import { TOption }                    from '../Breeds/types'
import { setFilters, setToBreedList } from '../../redux/Search/slice'
import qs                             from 'qs'
import OrderSelect                    from '../common/OrderSelect/OrderSelect'
import TypeSelect                     from '../common/TypeSelect/TypeSelect'
import { fetchBreeds }                from '../../redux/Breeds/asyncActions'


const GallerySort = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)
	const { filters, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = filters.page + 1

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds())
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	const createParams = (value: string, limit: string, order: string, page: number, type: string) => {
		return qs.stringify({
			q: value,
			limit,
			order,
			page,
			type,
		})
	}

	const createNewFilters = (label?: string, limit?: string, order?: string, type?: string) => {
		return {
			value: label || filters.value,
			limit: limit || filters.limit,
			order: order || filters.order,
			page: filters.page + 1,
			type: type || filters.type,
		}
	}

	const onChangeLimit = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(undefined, e.value, undefined)
			setSearchParams(createParams(filters.value, e.value, filters.order, pageNumberForUI, filters.type))
			dispatch(setFilters(newObj))
		}
	}

	const onChangeOption = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(e.label, undefined, undefined)
			setSearchParams(createParams(e.label, filters.limit, filters.order, pageNumberForUI, filters.type))
			dispatch(setFilters(newObj))
		}
	}

	const onChangeOrder = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(filters.value, undefined, e.value, filters.type)
			setSearchParams(createParams(filters.value, filters.limit, e.value, pageNumberForUI, filters.type))
			dispatch(setFilters(newObj))
		}
	}

	const onChangeType = (e: TOption) => {
		if (e) {
			const newObj = createNewFilters(filters.value, undefined, undefined, e?.value)
			setSearchParams(createParams(filters.value, filters.limit, filters.order, pageNumberForUI, e?.value))
			dispatch(setFilters(newObj))
		}
	}

	return (
		<div className={ s.sortGallery_wr }>
			<div className={ s.sortGallery_wr__left }>
				<OrderSelect
					value={ filters.order }
					onChangeOrder={ onChangeOrder }
				/>
				<BreedSelect
					onChangeOption={ onChangeOption }
					value={ filters.value }
					dispatch={ dispatch }
					options={ breedsList }
					status={ status }
				/>
			</div>
			<div className={ s.sortGallery_wr__right }>
				<TypeSelect
					value={ filters.type }
					onChangeType={ onChangeType }/>
				<LimitSelect
					onChangeLimit={ onChangeLimit }
					limit={ filters.limit }
					dispatch={ dispatch }
				/>
			</div>

		</div>
	)
}

export default GallerySort