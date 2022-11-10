import React, { useEffect, useState } from 'react'
import { useSearchParams }            from 'react-router-dom'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectSearch }   from '../../redux/Search/selectors'
import { setToBreedList } from '../../redux/Search/slice'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'

import TypeSelect                   from '../common/TypeSelect/TypeSelect'
import OrderSelect                  from '../common/OrderSelect/OrderSelect'
import { BreedSelect, LimitSelect } from '../common'


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
		<div className='sortGallery_wr'>
			<div className='sortGallery_wr__left'>
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
			<div className='sortGallery_wr__right'>
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