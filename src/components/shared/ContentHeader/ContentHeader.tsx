import React           from 'react'
import s               from './ContentHeader.module.scss'
import { useLocation } from 'react-router-dom'


import SortBreeds                               from '../../SortBreeds/SortBreeds'
import { BackButton, BreadCrumbs, UploadBtnWr } from '../../Ui'


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