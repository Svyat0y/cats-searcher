import React     from 'react'
import s         from './MainNav.module.scss'
import { TCard } from './types'

import { Link } from 'react-router-dom'


const Card: React.FC<TCard> = ({ name, img, color, to }) => {
	return (
		<div className={ s.content__card }>
			<div className={ `${ s.card } ${ s[color] }` }>
				<div className={ s.card__img_wr }>
					<img src={ img } alt='card'/>
				</div>
			</div>
			<Link to={ to }>
				<div className={ `btn ${ s.card__btn }` }>{ name }</div>
			</Link>
		</div>

	)
}

export default Card
