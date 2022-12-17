import React from 'react'
import s     from './ContentBody.module.scss'


type TContentBody = {
	children: React.ReactNode
}

const ContentBody: React.FC<TContentBody> = ({ children }) => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.body }>
				{ children }
			</div>
		</div>
	)
}

export default ContentBody