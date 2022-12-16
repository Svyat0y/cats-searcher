import React, { useEffect, useState } from 'react'
import s                              from './UploadModal.module.scss'
import { TUploadModal }               from './types'

import { useAppDispatch }                           from '../../../redux/store'
import { setMessage, setShowModal, setShowOverlay } from '../../../redux/Upload/slice'

import FileUploader from './FileUploader'
import UploadHeader from './UploadHeader'


const UploadModal: React.FC<TUploadModal> = ({ showModal, message, isLoaded, status }) => {
	const [ animShow, setAnimShow ] = useState(false)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setAnimShow(showModal)
	}, [ showModal ])

	const onCloseModal = () => {
		setAnimShow(false)
		dispatch(setShowOverlay(false))

		setTimeout(() => {
			dispatch(setMessage(''))
			dispatch(setShowModal(false))
		}, 300)
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