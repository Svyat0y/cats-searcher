import React, { useEffect, useState } from 'react'
import s                              from './Gallery.module.scss'
import { BreedSelect, LimitSelect }   from '../common'
import { useAppDispatch }             from '../../redux/store'
import { useSearchParams }            from 'react-router-dom'
import { useSelector }                from 'react-redux'
import { selectSearch }               from '../../redux/Search/selectors'
import { TOption }                    from '../Breeds/types'
import { setToBreedList }             from '../../redux/Search/slice'
import qs                             from 'qs'
import OrderSelect                    from '../common/OrderSelect/OrderSelect'
import TypeSelect                     from '../common/TypeSelect/TypeSelect'
import { fetchBreeds }                from '../../redux/Breeds/asyncActions'


const GallerySort = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)
	const { galleryFilters: { value, order, limit, page, type }, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = page + 1

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'none', label: 'None' }))
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

	const onChangeLimit = (e: TOption) => {
		e && setSearchParams(createParams(value, e.value, order, pageNumberForUI, type))
	}

	const onChangeOption = (e: TOption) => {
		e && setSearchParams(createParams(e.label, limit, order, pageNumberForUI, type))
	}

	const onChangeOrder = (e: TOption) => {
		e && setSearchParams(createParams(value, limit, e.value, pageNumberForUI, type))
	}

	const onChangeType = (e: TOption) => {
		e && setSearchParams(createParams(value, limit, order, pageNumberForUI, e?.value))
	}

	return (
		<div className={ s.sortGallery_wr }>
			<div className={ s.sortGallery_wr__left }>
				<OrderSelect
					value={ order }
					onChangeOrder={ onChangeOrder }
				/>
				<BreedSelect
					onChangeOption={ onChangeOption }
					value={ value }
					dispatch={ dispatch }
					options={ breedsList }
					status={ status }
				/>
			</div>
			<div className={ s.sortGallery_wr__right }>
				<TypeSelect
					value={ type }
					onChangeType={ onChangeType }/>
				<LimitSelect
					onChangeLimit={ onChangeLimit }
					limit={ limit }
					dispatch={ dispatch }
				/>
			</div>

		</div>
	)
}

export default GallerySort