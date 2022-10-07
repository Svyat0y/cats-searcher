import React, { useEffect } from 'react'
import s                    from '../Search/SearchComponent.module.scss'

import { useAppDispatch } from '../../redux/store'

import { SearchPanel }        from '../Search'
import { BackButton, Button } from '../common/Buttons'


const SingleBreedInfo: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		console.log('rendered')
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