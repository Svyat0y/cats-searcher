import React from 'react'
import s     from './MainNav.module.scss'

import { TCard } from './types'


const Card: React.FC<TCard> = ({ name, img, color }) => {
	return (
		<div className={ s.content__card }>
			<div className={ `${ s.card } ${ s[color] }` }>
				<div className={ s.card__img_wr }>
					<img src={ img } alt='card'/>
				</div>
			</div>
			<div className={ `btn ${ s.card__btn }` }>{ name }</div>
		</div>

	)
}

export default Card
