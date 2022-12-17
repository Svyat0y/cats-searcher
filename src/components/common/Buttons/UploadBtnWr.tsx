import React from 'react'
import s     from './UploadBtn.module.scss'

import { setShowModal, setShowOverlay } from '../../../redux/Upload/slice'
import { useAppDispatch }               from '../../../redux/store'

import { Button } from '../index'


const UploadBtnWr = () => {
	const dispatch = useAppDispatch()

	const onClickShowModal = () => {
		dispatch(setShowModal(true))
		dispatch(setShowOverlay(true))
	}

	return (
		<div className={ s.wrapper }><Button onclick={ onClickShowModal } upload={ true } name='Upload'/></div>
	)
}

export default UploadBtnWr