import React from 'react'

import { useSelector }  from 'react-redux'
import { selectVoting } from '../../redux/voting/selectors'

import { BackButton, Button } from '../common/Buttons'


const BreadCrumbs: React.FC = () => {
	const { activeButton } = useSelector(selectVoting)

	return (
		<div className='breadCrumbs'>
			<BackButton/>
			<Button
				breadCrumbs={ true }
				name={ activeButton }
				isActive={ true }/>
		</div>
	)
}

export default BreadCrumbs