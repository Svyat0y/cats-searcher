import React           from 'react'
import s               from './Content.module.scss'
import { SearchPanel } from '../index'

import { Outlet, useLocation } from 'react-router-dom'
import { useSelector }         from 'react-redux'
import { uploadingSlice }      from '../../redux/Upload/selectors'

import UploadModal from '../common/UploadModal/UploadModal'


const ContentLayout: React.FC = () => {
	const location = useLocation()
	const { showModal, message, isLoaded } = useSelector(uploadingSlice)

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				{ location.pathname !== '/' && <SearchPanel/> }
				<Outlet/>
				{ showModal && <UploadModal
					showModal={ showModal }
					message={ message }
					isLoaded={ isLoaded }/> }
			</div>
		</div>
	)
}

export default ContentLayout