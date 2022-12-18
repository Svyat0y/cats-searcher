import { FC }          from 'react'
import s               from './ContentHeader.module.scss'
import { useLocation } from 'react-router-dom'


import { BackButton, BreadCrumbs, UploadBtnWr } from '../../Ui'
import { SortBreeds }                           from '../../index'


const ContentHeader: FC = () => {
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