import React, { useEffect } from 'react'
import s                    from './SingleBreedInfo.module.scss'
import qs                   from 'qs'

import { useSelector }        from 'react-redux'
import { useAppDispatch }     from '../../redux/store'
import { fetchSingleBreed }   from '../../redux/Breeds/asyncActions'
import { selectBreeds }       from '../../redux/Breeds/selectors'
import { setActiveBtn }       from '../../redux/voting/slice'
import { setActiveBreedName } from '../../redux/Breeds/slice'

import { Spinner } from '../common'
import Slider      from './Slider'
import SliderDesc  from './SliderDesc'


const SingleBreedInfo: React.FC = () => {
	const dispatch = useAppDispatch()
	const { singleBreed, status, activeBreedName } = useSelector(selectBreeds)
	const emptyData = singleBreed.length === 0

	useEffect(() => {
		dispatch(setActiveBreedName(singleBreed[0]?.name))
	}, [ singleBreed, activeBreedName ])

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))

		if (emptyData && status === 'success') {
			if (window.location.search) {
				const params: any = qs.parse(window.location.search.slice(1))
				dispatch(fetchSingleBreed(params.breed_id))
			}
		}
	}, [])

	return (
		<>
			<div className={ s.breed }>
				{
					singleBreed.length > 0 && status === 'success'
						? <>
							<Slider singleBreed={ singleBreed }/>
							<SliderDesc singleBreed={ singleBreed }/>
						</>
						: <Spinner/>
				}
			</div>

		</>
	)
}

export default SingleBreedInfo