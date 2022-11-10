import React, { useEffect, useState } from 'react'
import s                              from './Gallery.module.scss'
import { BreedSelect, LimitSelect }   from '../common'
import { useAppDispatch }             from '../../redux/store'
import { useSearchParams }            from 'react-router-dom'
import { useSelector }                from 'react-redux'
import { selectSearch }               from '../../redux/Search/selectors'
import { setToBreedList }             from '../../redux/Search/slice'
import OrderSelect                    from '../common/OrderSelect/OrderSelect'
import TypeSelect                     from '../common/TypeSelect/TypeSelect'
import { fetchBreeds }                from '../../redux/Breeds/asyncActions'


const GallerySort = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)
	const { galleryFilters, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = galleryFilters.page + 1

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'none', label: 'None' }))
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])


	return (
		<div className={ s.sortGallery_wr }>
			<div className={ s.sortGallery_wr__left }>
				<OrderSelect
					filters={ galleryFilters }
					pageNumberForUI={ pageNumberForUI }
					setSearchParams={ setSearchParams }
				/>
				<BreedSelect
					filters={ galleryFilters }
					pageNumberForUI={ pageNumberForUI }
					setSearchParams={ setSearchParams }
					dispatch={ dispatch }
					options={ breedsList }
					status={ status }
				/>
			</div>
			<div className={ s.sortGallery_wr__right }>
				<TypeSelect
					filters={ galleryFilters }
					pageNumberForUI={ pageNumberForUI }
					setSearchParams={ setSearchParams }
				/>
				<LimitSelect
					filters={ galleryFilters }
					pageNumberForUI={ pageNumberForUI }
					dispatch={ dispatch }
					setSearchParams={ setSearchParams }
				/>
			</div>

		</div>
	)
}

export default GallerySort