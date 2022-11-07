import React, { useCallback } from 'react'
import s                      from './MainNav.module.scss'
import { Link, useLocation }  from 'react-router-dom'

import { useAppDispatch } from '../../../redux/store'
import { fetchSearch }    from '../../../redux/Search/asyncActions'
import { setFilters }     from '../../../redux/Search/slice'
import { TCard }          from './types'


const Card: React.FC<TCard> = React.memo(({ name, img, color, to, active }) => {
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
		<div className={ s.content__card }>
			<Link onClick={ onClickCard } to={ to } className={ `${ s.card } ${ s[color] } ${ loc ? s.active : '' }` }>
				<div className={ s.card__img_wr }>
					<img src={ img } alt='card'/>
				</div>
			</Link>
			<div className={ `btn ${ s.card__btn } ${ loc ? s.active : '' }` }>{ name }</div>
		</div>

	)
})

export default Card
