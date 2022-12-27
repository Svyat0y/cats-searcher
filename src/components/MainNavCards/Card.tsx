import { FC }                from 'react'
import s                     from './MainNavCards.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { TCard }             from './types'


const Card: FC<TCard> = ({ name, img, color, to, active }) => {
	const location = useLocation()
	const loc = location.pathname.includes(active)

	return (
		<div className={ s.card }>
			<Link to={ to } className={ `${ s.card } ${ s[color] } ${ loc ? s.active : '' }` }>
				<div className={ s.imgWrapper }>
					<img src={ img } alt='card'/>
				</div>
			</Link>
			<div className={ `btn ${ s.cardBtn } ${ loc ? s.active : '' }` }>{ name }</div>
		</div>

	)
}

export default Card
