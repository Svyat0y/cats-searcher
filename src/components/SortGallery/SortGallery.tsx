import { FC, useEffect, useState } from 'react'
import s                           from './SortGallery.module.scss'
import { useSearchParams }         from 'react-router-dom'
import { TBreedOption }            from '../../redux/Breeds/types'

import { useSelector }    from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { selectSearch }   from '../../redux/Search/selectors'
import { setToBreedList } from '../../redux/Search/slice'
import { fetchBreeds }    from '../../redux/Breeds/asyncActions'
import { TOption }        from '../../redux/Search/types'

import { BreedSelect, LimitSelect, OrderSelect, TypeSelect } from '../Ui'
import { createParams }                                      from '../../utils/createParams'


const limitOptionsForGallery: TBreedOption[] = [
	{ value: '5', label: 'Limit: 5' },
	{ value: '10', label: 'Limit: 10' },
	{ value: '15', label: 'Limit: 15' },
	{ value: '20', label: 'Limit: 30' },
]

const SortGallery: FC = () => {
	const dispatch = useAppDispatch()
	const [ _, setSearchParams ] = useSearchParams()
	const [ isMounted, setIsMounted ] = useState(false)
	const { galleryFilters, status, breedsList } = useSelector(selectSearch)

	const pageNumberForUI = galleryFilters.page + 1

	const props = { filters: galleryFilters, pageNumberForUI, setSearchParams, dispatch, status }

	useEffect(() => {
		if (isMounted) dispatch(fetchBreeds({ value: 'None', label: 'None' }))
		setIsMounted(true)

		return () => {
			dispatch(setToBreedList([]))
		}
	}, [ isMounted ])

	const onChangeOption = (e: TOption) => {
		if (e) {
			setSearchParams(createParams(e.value, galleryFilters.limit, galleryFilters.order, pageNumberForUI, galleryFilters.type))
		}
	}
	const getValue = () => breedsList.find(option => option.value === galleryFilters.value)


	return (
		<div className={ s.wrapper }>
			<div className={ s.left }>
				<OrderSelect { ...props }/>
				<BreedSelect
					options={ breedsList }
					onChangeOption={ onChangeOption }
					getValue={ getValue }
					{ ...props }
				/>
			</div>
			<div className={ s.right }>
				<TypeSelect { ...props }/>
				<LimitSelect options={ limitOptionsForGallery } { ...props }/>
			</div>

		</div>
	)
}

export default SortGallery