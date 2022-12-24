import { FC, useEffect }   from 'react'
import s                   from './SingleBreedInfo.module.scss'
import { useSearchParams } from 'react-router-dom'

import { useSelector }                        from 'react-redux'
import { useAppDispatch }                     from '../../redux/store'
import { selectBreeds }                       from '../../redux/Breeds/selectors'
import { setActiveBtn }                       from '../../redux/voting/slice'
import { setActiveBreedName, setSingleBreed } from '../../redux/Breeds/slice'
import { fetchSingleBreed }                   from '../../redux/Breeds/asyncActions'

import Slider                     from './Slider'
import SliderDesc                 from './SliderDesc'
import { ContentHeader, Spinner } from '../index'


const SingleBreedInfo: FC = () => {
	const dispatch = useAppDispatch()
	const [ searchParams ] = useSearchParams()
	const { singleBreed, status, activeBreedName } = useSelector(selectBreeds)
	const emptyData = singleBreed.length === 0

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

		return () => {
			dispatch(setSingleBreed([]))
		}
	}, [])

	return (
		<>
			<div className={ s.wrapper }>
				<ContentHeader/>
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