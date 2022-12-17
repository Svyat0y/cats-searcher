import React from 'react'
import s     from './ContentBody.module.scss'


const ContentBody = ({ children }: any) => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.body }>
				{ children }
			</div>
		</div>
	)
}

export default ContentBody