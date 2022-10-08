import React, { useEffect } from 'react'
import s                    from '../Search/SearchComponent.module.scss'
import qs                   from 'qs'

import { useAppDispatch }   from '../../redux/store'
import { fetchSingleBreed } from '../../redux/Breeds/asyncActions'

import { SearchPanel }  from '../Search'
import { useSelector }  from 'react-redux'
import { selectBreeds } from '../../redux/Breeds/selectors'
import { BreadCrumbs }  from '../BreadCrumbs'


const SingleBreedInfo: React.FC = () => {
	const dispatch = useAppDispatch()
	const { singleBreed, status } = useSelector(selectBreeds)

	useEffect(() => {
		if (window.location.search) {
			const params: any = qs.parse(window.location.search.slice(1))
			dispatch(fetchSingleBreed(params.breed_id))
		}

	}, [])

	console.log(singleBreed)

	return (
		<>
			<SearchPanel/>
			<div className={ s.search_wr }>
				<BreadCrumbs/>
			</div>
		</>
	)
}

export default SingleBreedInfo