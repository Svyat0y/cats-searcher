import React                       from 'react'
import { BackButton, BreadCrumbs } from '../index'

import SortBreeds      from '../../Breeds/SortBreeds'
import { useLocation } from 'react-router-dom'


const ContentHeader: React.FC = () => {
	const location = useLocation()
	return (
		<div className='contentHeader'>
			<BackButton/>
			<BreadCrumbs/>
			{ (location.pathname.includes('breeds') && !location.pathname.includes('description')) && <SortBreeds/> }
		</div>
	)
}

export default ContentHeader