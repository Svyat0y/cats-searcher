import { FC }           from 'react'
import s                from './ContentBody.module.scss'
import { TContentBody } from './types'


const ContentBody: FC<TContentBody> = ({ children }) => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.body }>
				{ children }
			</div>
		</div>
	)
}

export default ContentBody