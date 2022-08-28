import React from 'react'
import s     from './Content.module.scss'

import { Preview } from '../Preview'


const Content: React.FC = () => {
	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				<Preview/>
			</div>
		</div>
	)
}

export default Content
