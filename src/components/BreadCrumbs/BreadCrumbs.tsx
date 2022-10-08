import React, { useEffect, useState } from 'react'

import { useSelector }  from 'react-redux'
import { selectVoting } from '../../redux/voting/selectors'

import { BackButton, Button } from '../common/Buttons'
import { selectBreeds }       from '../../redux/Breeds/selectors'


const BreadCrumbs: React.FC = () => {
	const { activeButton } = useSelector(selectVoting)
	const { activeBreedName, singleBreed } = useSelector(selectBreeds)

	const [ isName, setIsName ] = useState(false)

	useEffect(() => {
		if (activeBreedName) setTimeout(() => setIsName(true), 500)
	}, [ singleBreed ])

	return (
		<div className='breadCrumbs'>
			<BackButton/>
			<Button
				breadCrumbs={ true }
				name={ activeButton }
				isActive={ activeBreedName === '' }/>
			{
				isName && <Button
					breadCrumbs={ true }
					name={ activeBreedName }
					isActive={ true }/>
			}
		</div>
	)
}

export default BreadCrumbs