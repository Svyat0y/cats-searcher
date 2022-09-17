import React     from 'react'
import s         from './MainNav.module.scss'
import { TCard } from './types'

import { Link, useLocation } from 'react-router-dom'


const Card: React.FC<TCard> = ({ name, img, color, to }) => {
	const location = useLocation()
	const loc = location.pathname.includes(to)

	return (
		<div className={ s.content__card }>
			<Link to={ to } className={ `${ s.card } ${ s[color] }` }>
				<div className={ s.card__img_wr }>
					<img src={ img } alt='card'/>
				</div>
			</Link>
			<div className={ `btn ${ s.card__btn } ${ loc ? s.active : '' }` }>{ name }</div>
		</div>

	)
}

export default Card
