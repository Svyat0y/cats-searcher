import { FC } from 'react'
import s      from './Burger.module.scss'

import { useAppDispatch } from '../../../redux/store'
import { setIsOpen }      from '../../../redux/MobileMenu/slice'


const Burger: FC = () => {
	const dispatch = useAppDispatch()

	return (
		<div onClick={ () => dispatch(setIsOpen(true)) } className={ s.wrapper }>
			<span></span>
		</div>
	)
}

export default Burger