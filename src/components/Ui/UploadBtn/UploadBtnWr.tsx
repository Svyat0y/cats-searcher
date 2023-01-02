import { FC } from 'react'
import s      from './UploadBtn.module.scss'

import { setShowModal }   from '../../../redux/Upload/slice'
import { useAppDispatch } from '../../../redux/store'

import { Button } from '../index'


const UploadBtnWr: FC = () => {
	const dispatch = useAppDispatch()

	const onClickShowModal = () => {
		dispatch(setShowModal(true))
	}

	return (
		<div className={ s.wrapper }><Button onclick={ onClickShowModal } upload={ true } name='Upload'/></div>
	)
}

export default UploadBtnWr