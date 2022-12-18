import { FC, useEffect, useState } from 'react'
import { useLocation }             from 'react-router-dom'

import { useSelector }  from 'react-redux'
import { selectVoting } from '../../../redux/voting/selectors'
import { selectBreeds } from '../../../redux/Breeds/selectors'

import Button from '../Buttons/Button'


const BreadCrumbs: FC = () => {
	const [ isName, setIsName ] = useState(false)
	const { activeButton } = useSelector(selectVoting)
	const { activeBreedName, singleBreed, status } = useSelector(selectBreeds)
	const location = useLocation()
	const locBreedDesc = location.pathname.includes('description')


	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (activeBreedName) timeoutId = setTimeout(() => setIsName(true), 300)

		return () => clearTimeout(timeoutId)
	}, [ singleBreed, activeBreedName ])

	return (
		<>
			<Button
				breadCrumbs={ true }
				name={ activeButton }
				isActive={ !locBreedDesc }/>
			{
				(isName && locBreedDesc && status === 'success') && <Button
					breadCrumbs={ true }
					name={ activeBreedName }
					isActive={ true }/>
			}
		</>
	)
}

export default BreadCrumbs