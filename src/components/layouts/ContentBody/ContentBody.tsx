import { FC, useEffect, useState } from 'react'
import s                           from './ContentBody.module.scss'
import { TContentBody }            from './types'


const ContentBody: FC<TContentBody> = ({ children }) => {
	const [ fadeIn, setFadeIn ] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			(setFadeIn(true))
		}, 0)
	}, [])

	return (
		<div className={ s.wrapper }>
			<div className={ `${ s.body } ${ fadeIn ? s.fadeIn : '' }` }>
				{ children }
			</div>
		</div>
	)
}

export default ContentBody