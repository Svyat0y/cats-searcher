import React           from 'react'
import { useLocation } from 'react-router-dom'

import SortBreeds                  from '../../Breeds/SortBreeds'
import { BackButton, BreadCrumbs } from '../index'
import UploadBtnWr                 from '../Buttons/UploadBtnWr'


const ContentHeader: React.FC = () => {
	const location = useLocation()

	return (
		<div className='contentHeader'>
			<BackButton/>
			<BreadCrumbs/>
			{ (location.pathname.includes('breeds') && !location.pathname.includes('description')) && <SortBreeds/> }
			{ location.pathname.includes('gallery') && <UploadBtnWr/> }
		</div>
	)
}

export default ContentHeader