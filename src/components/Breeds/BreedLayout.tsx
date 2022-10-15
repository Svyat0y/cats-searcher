import React from 'react'

import { Outlet }        from 'react-router-dom'
import { ContentHeader } from '../common'


const BreedLayout = () => {
	return (
		<div className='content'>
			<div className='content__body'>
				<ContentHeader isVisibleBreedSelect={ true }/>
				<Outlet/>
			</div>
		</div>
	)
}

export default BreedLayout