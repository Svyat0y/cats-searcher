import React from 'react'
import s     from './ContentWrapper.module.scss'

import { Outlet, useLocation } from 'react-router-dom'
import { useSelector }         from 'react-redux'
import { uploadingSlice }      from '../../../redux/Upload/selectors'

import { SearchPanel, UploadModal } from '../../index'


const ContentWrapperLayout: React.FC = () => {
	const location = useLocation()
	const { showModal, message, isLoaded, status } = useSelector(uploadingSlice)

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				{ location.pathname !== '/' && <SearchPanel/> }
				<Outlet/>
				{ showModal && <UploadModal
					showModal={ showModal }
					message={ message }
					isLoaded={ isLoaded }
					status={ status }/> }
			</div>
		</div>
	)
}

export default ContentWrapperLayout