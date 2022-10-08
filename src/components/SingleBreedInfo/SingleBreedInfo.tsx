import React, { useEffect } from 'react'
import s                    from '../Search/SearchComponent.module.scss'
import qs                   from 'qs'

import { useAppDispatch } from '../../redux/store'

import { SearchPanel }        from '../Search'
import { BackButton, Button } from '../common/Buttons'
import { fetchSingleBreed }   from '../../redux/Search/asyncActions'


const SingleBreedInfo: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (window.location.search) {
			const params: any = qs.parse(window.location.search.slice(1))
			dispatch(fetchSingleBreed(params.breed_id))
		}
	}, [])

	return (
		<>
			<SearchPanel/>
			<div className={ s.search_wr }>
				<div className='breadCrumbs'>
					<BackButton/>
					<Button
						breadCrumbs={ true }
						name={ 'Breed' }
						isActive={ true }/>
				</div>
			</div>
		</>
	)
}

export default SingleBreedInfo