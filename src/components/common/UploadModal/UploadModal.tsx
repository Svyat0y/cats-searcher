import React, { useEffect, useState } from 'react'
import s                              from './UploadModal.module.scss'
import { TUploadModal }               from './types'

import { useAppDispatch }               from '../../../redux/store'
import { setShowModal, setShowOverlay } from '../../../redux/Upload/slice'

import FileUploader from './FileUploader'


const UploadModal: React.FC<TUploadModal> = ({ showModal, message, isLoaded }) => {
	const [ animShow, setAnimShow ] = useState(false)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setAnimShow(showModal)
	}, [ showModal ])

	const onCloseModal = () => {
		setAnimShow(false)
		dispatch(setShowOverlay(false))

		setTimeout(() => {
			dispatch(setShowModal(false))
		}, 300)
	}

	return (
		<>
			<div className={ `${ s.wrapper } ${ animShow ? s.aminShow : '' }` }>
				<div className={ s.close } onClick={ onCloseModal }></div>
				<div className={ s.content }>
					<h5 className={ s.title }>
						Upload a .jpg or .png Cat Image
					</h5>
					<p className={ s.subTitle }>
						Any uploads must comply with the <span className={ s.subTitle__red }>upload guidelines</span> or face
						deletion.
					</p>
					<FileUploader dispatch={ dispatch } message={ message } isLoaded={ isLoaded }/>
				</div>
			</div>
		</>
	)
}

export default UploadModal