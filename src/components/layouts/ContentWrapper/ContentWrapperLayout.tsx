import { FC } from 'react'
import s      from './ContentWrapper.module.scss'

import { Outlet, useLocation } from 'react-router-dom'
import { useSelector }         from 'react-redux'
import { uploadingSlice }      from '../../../redux/Upload/selectors'

import { SearchPanel, UploadModal } from '../../index'


const ContentWrapperLayout: FC = () => {
	const location = useLocation()
	const { showModalUpload, message, isLoaded, status } = useSelector(uploadingSlice)

	return (
		<div className={ s.wrapper }>
			<div className={ s.container }>
				{ location.pathname !== '/' && <SearchPanel/> }
				<Outlet/>
				{ showModalUpload && <UploadModal
					showModalUpload={ showModalUpload }
					message={ message }
					isLoaded={ isLoaded }
					status={ status }/> }
			</div>
		</div>
	)
}

export default ContentWrapperLayout