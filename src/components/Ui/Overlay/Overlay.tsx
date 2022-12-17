import React, { useEffect, useState } from 'react'
import s                              from './Overlay.module.scss'

import { useSelector }    from 'react-redux'
import { uploadingSlice } from '../../../redux/Upload/selectors'


const Overlay: React.FC = () => {
	const { showModal, overlay } = useSelector(uploadingSlice)
	const [ animShow, setAnimShow ] = useState(false)

	useEffect(() => {
		setAnimShow(overlay)
	}, [ overlay ])

	return (
		<>
			{ showModal
				? <div className={ `${ s.overlay } ${ animShow ? s.showOverlay : '' }` }></div>
				: ''
			}
		</>
	)
}

export default Overlay