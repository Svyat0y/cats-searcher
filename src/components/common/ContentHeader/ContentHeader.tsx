import React           from 'react'
import s               from './ContentHeader.module.scss'
import { useLocation } from 'react-router-dom'


import { BackButton, BreadCrumbs } from '../index'
import UploadBtnWr                 from '../Buttons/UploadBtn/UploadBtnWr'
import SortBreeds                  from '../../Breeds/SortBreeds/SortBreeds'


const ContentHeader: React.FC = () => {
	const location = useLocation()

	return (
		<div className={ s.wrapper }>
			<BackButton/>
			<BreadCrumbs/>
			{ (location.pathname.includes('breeds') && !location.pathname.includes('description')) && <SortBreeds/> }
			{ location.pathname.includes('gallery') && <UploadBtnWr/> }
		</div>
	)
}

export default ContentHeader