import React                       from 'react'
import { BackButton, BreadCrumbs } from '../index'
import { TContentHeader }          from './types'

import SortBreeds from '../../Breeds/SortBreeds'


const ContentHeader: React.FC<TContentHeader> = ({ isVisibleBreedSelect }) => {
	return (
		<div className='contentHeader'>
			<BackButton/>
			<BreadCrumbs/>
			{ isVisibleBreedSelect && <SortBreeds/> }
		</div>
	)
}

export default ContentHeader