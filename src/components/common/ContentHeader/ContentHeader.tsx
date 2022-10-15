import React                       from 'react'
import { BackButton, BreadCrumbs } from '../index'
import SortBreeds                  from '../../Breeds/SortBreeds'


const ContentHeader: React.FC = () => {
	return (
		<div className='contentHeader'>
			<BackButton/>
			<BreadCrumbs/>
			<SortBreeds/>
		</div>
	)
}

export default ContentHeader