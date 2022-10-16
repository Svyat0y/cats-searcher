import React, { useEffect } from 'react'
import s                    from './SingleBreedInfo.module.scss'

import { useSelector }        from 'react-redux'
import { useAppDispatch }     from '../../redux/store'
import { fetchSingleBreed }   from '../../redux/Breeds/asyncActions'
import { selectBreeds }       from '../../redux/Breeds/selectors'
import { setActiveBtn }       from '../../redux/voting/slice'
import { setActiveBreedName } from '../../redux/Breeds/slice'

import { Spinner }         from '../common'
import Slider              from './Slider'
import SliderDesc          from './SliderDesc'
import { useSearchParams } from 'react-router-dom'


const SingleBreedInfo: React.FC = () => {
	const dispatch = useAppDispatch()
	const { singleBreed, status, activeBreedName } = useSelector(selectBreeds)
	const emptyData = singleBreed.length === 0
	const [ searchParams, setSearchParams ] = useSearchParams()

	useEffect(() => {
		dispatch(setActiveBreedName(singleBreed[0]?.name))
	}, [ singleBreed, activeBreedName ])

	useEffect(() => {
		dispatch(setActiveBtn('Breeds'))

		if (emptyData && status === 'success') {
			const params = searchParams.get('breed_id')
			if (params) {
				dispatch(fetchSingleBreed(params))
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