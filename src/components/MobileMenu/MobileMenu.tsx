import React, { useEffect, useState } from 'react'
import s                              from './MobileMenu.module.scss'

import { useAppDispatch } from '../../redux/store'
import { setIsOpen }      from '../../redux/MobileMenu/slice'

import { useCardsData } from '../../hooks/useCardsData'

import Card       from '../MainNavCards/Card'
import { Close }  from '../Ui'
import HeaderLogo from '../Header/HeaderLogo'


const MobileMenu = () => {
	const dispatch = useAppDispatch()
	const [ fadeIn, setFadeIn ] = useState(false)
	const cards = useCardsData()

	useEffect(() => {
		setFadeIn(true)
		document.body.classList.add('menu-is-open')

		return () => document.body.classList.remove('menu-is-open')
	}, [])

	const onCloseModal = () => {
		setFadeIn(false)

		setTimeout(() => dispatch(setIsOpen(false)), 200)
	}

	return (
		<div className={ `${ s.wrapper } ${ fadeIn ? s.animShow : '' }` }>
			<Close onClick={ onCloseModal }/>
			<div className={ s.userName }>
				<HeaderLogo/>
			</div>
			<div className={ s.menuCards }>
				{ cards.map((card) => <Card key={ card.name } onClick={ onCloseModal } { ...card }/>) }
			</div>
		</div>
	)
}

export default MobileMenu