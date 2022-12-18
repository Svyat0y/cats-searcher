import { FC, useCallback, memo } from 'react'
import s                         from './MainNavCards.module.scss'
import { Link, useLocation }     from 'react-router-dom'
import { TCard }                 from './types'

import { useAppDispatch } from '../../redux/store'
import { fetchSearch }    from '../../redux/Search/asyncActions'
import { setFilters }     from '../../redux/Search/slice'


const Card: FC<TCard> = memo(({ name, img, color, to, active }) => {
	const dispatch = useAppDispatch()
	const location = useLocation()
	const loc = location.pathname.includes(active)

	const onClickCard = useCallback(() => {
		if (location.pathname.includes('breeds')) {
			dispatch(setFilters({ value: 'All breeds', limit: '5', order: 'asc', page: 0 }))
			dispatch(fetchSearch())
		}
	}, [])

	return (
		<div className={ s.card }>
			<Link onClick={ onClickCard } to={ to } className={ `${ s.card } ${ s[color] } ${ loc ? s.active : '' }` }>
				<div className={ s.imgWrapper }>
					<img src={ img } alt='card'/>
				</div>
			</Link>
			<div className={ `btn ${ s.cardBtn } ${ loc ? s.active : '' }` }>{ name }</div>
		</div>

	)
})

export default Card
