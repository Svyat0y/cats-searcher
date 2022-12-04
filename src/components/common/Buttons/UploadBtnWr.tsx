import React              from 'react'
import { Button }         from '../index'
import { setShowModal }   from '../../../redux/Upload/slice'
import { useAppDispatch } from '../../../redux/store'


const UploadBtnWr = () => {
	const dispatch = useAppDispatch()

	const onClickShowModal = () => {
		dispatch(setShowModal(true))
	}

	return (
		<div className='uploadButton_wr'><Button onclick={ onClickShowModal } upload={ true } name='Upload'/></div>
	)
}

export default UploadBtnWr