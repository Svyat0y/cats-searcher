import { FC, useEffect, useState } from 'react'
import s                           from './UploadModal.module.scss'
import { TUploadModal }            from './types'

import { useAppDispatch }                 from '../../redux/store'
import { setMessage, setShowModalUpload } from '../../redux/Upload/slice'

import FileUploader from './FileUploader/FileUploader'
import UploadHeader from './UploadHeader'


const UploadModal: FC<TUploadModal> = ({ showModalUpload, message, isLoaded, status }) => {
	const [ animShow, setAnimShow ] = useState(false)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setAnimShow(showModalUpload)
	}, [ showModalUpload ])

	const onCloseModal = () => {
		setAnimShow(false)

		setTimeout(() => {
			dispatch(setMessage(''))
			dispatch(setShowModalUpload(false))
		}, 200)
	}

	return (
		<div className={ `${ s.wrapper } ${ animShow ? s.aminShow : '' }` }>
			<div className={ s.close } onClick={ onCloseModal }></div>
			<UploadHeader/>
			<FileUploader dispatch={ dispatch } message={ message } isLoaded={ isLoaded } status={ status }/>
		</div>
	)
}

export default UploadModal