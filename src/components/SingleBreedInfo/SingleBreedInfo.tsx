import React, { useEffect } from 'react'
import s                    from '../Search/SearchComponent.module.scss'
import qs                   from 'qs'

import { useAppDispatch }   from '../../redux/store'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'

import { useSelector }  from 'react-redux'
import { selectBreeds } from '../../redux/Breeds/selectors'
import { BreadCrumbs }  from '../BreadCrumbs'
import { setActiveBtn } from '../../redux/voting/slice'


const SingleBreedInfo: React.FC = () => {
	const dispatch = useAppDispatch()
	const { singleBreed, status } = useSelector(selectBreeds)
	const emptyData = singleBreed.length === 0

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))
		if (window.location.search && emptyData) {
			const params: any = qs.parse(window.location.search.slice(1))
			dispatch(fetchSingleBreed(params.breed_id))
		}

	}, [])

	console.log(singleBreed)

	return (
		<>
			<div className={ s.search_wr }>
				<BreadCrumbs/>
				single breed
			</div>

		</>
	)
}

export default SingleBreedInfo