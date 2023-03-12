import { FC } from 'react'
import s      from './UploadBtn.module.scss'

import { setShowModalUpload } from '../../../../redux/Upload/slice'
import { useAppDispatch }     from '../../../../redux/store'

import { Button } from '../../index'


const UploadBtnWr: FC = () => {
	const dispatch = useAppDispatch()

	const onClickShowModal = () => {
		dispatch(setShowModalUpload(true))
	}

	return (
		<div className={ s.wrapper }><Button onclick={ onClickShowModal } upload={ true } name='Upload'/></div>
	)
}

export default UploadBtnWr