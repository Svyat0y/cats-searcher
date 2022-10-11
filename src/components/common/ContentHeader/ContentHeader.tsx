import React                       from 'react'
import { BackButton, BreadCrumbs } from '../index'


const ContentHeader: React.FC = () => {

	return (
		<div className='contentHeader'>
			<BackButton/>
			<BreadCrumbs/>
		</div>
	)
}

export default ContentHeader