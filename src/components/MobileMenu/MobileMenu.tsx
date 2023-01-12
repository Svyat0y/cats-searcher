import React, { useEffect, useState } from 'react'
import s                              from './MobileMenu.module.scss'
import Close                          from '../Ui/Buttons/Close/Close'
import { useAppDispatch }             from '../../redux/store'
import { setIsOpen }                  from '../../redux/MobileMenu/slice'


const MobileMenu = () => {
	const dispatch = useAppDispatch()
	const [ fadeIn, setFadeIn ] = useState(false)

	useEffect(() => {
		setFadeIn(true)
	}, [])

	const onClickModal = () => {
		setFadeIn(false)

		setTimeout(() => dispatch(setIsOpen(false)), 200)
	}

	return (
		<div className={ `${ s.wrapper } ${ fadeIn ? s.animShow : '' }` }>
			<Close onClick={ onClickModal }/>
			content
		</div>
	)
}

export default MobileMenu