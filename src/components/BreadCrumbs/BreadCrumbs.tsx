import React, { useEffect, useState } from 'react'

import { useSelector }  from 'react-redux'
import { selectVoting } from '../../redux/voting/selectors'

import { BackButton, Button } from '../common/Buttons'
import { selectBreeds }       from '../../redux/Breeds/selectors'
import { useLocation }        from 'react-router-dom'


const BreadCrumbs: React.FC = () => {
	const { activeButton } = useSelector(selectVoting)
	const { activeBreedName, singleBreed } = useSelector(selectBreeds)
	const location = useLocation()
	const locBreedDesc = location.pathname.includes('desc')

	const [ isName, setIsName ] = useState(false)

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (activeBreedName) timeoutId = setTimeout(() => setIsName(true), 300)

		return () => clearTimeout(timeoutId)
	}, [ singleBreed ])

	return (
		<div className='breadCrumbs'>
			<BackButton/>
			<Button
				breadCrumbs={ true }
				name={ activeButton }
				isActive={ !locBreedDesc }/>
			{
				(isName && locBreedDesc) && <Button
					breadCrumbs={ true }
					name={ activeBreedName }
					isActive={ true }/>
			}
		</div>
	)
}

export default BreadCrumbs