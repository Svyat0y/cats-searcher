import React, { useEffect, useState } from 'react'
import s                              from './UploadModal.module.scss'
import { TUploadModal }               from './types'

import { useAppDispatch } from '../../../redux/store'
import { setShowModal }   from '../../../redux/Upload/slice'

import FileUploader from './FileUploader'


const UploadModal: React.FC<TUploadModal> = ({ showModal }) => {
	const [ animShow, setAnimShow ] = useState(false)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setTimeout(() => {
			setAnimShow(showModal)
		}, 100)
	}, [ showModal ])

	const onCloseModal = () => {
		setAnimShow(false)
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
					<FileUploader/>
				</div>
			</div>
		</>
	)
}

export default UploadModal