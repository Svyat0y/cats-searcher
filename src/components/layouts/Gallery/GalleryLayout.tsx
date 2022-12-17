import React      from 'react'
import { Outlet } from 'react-router-dom'

import ContentHeader from '../../shared/ContentHeader/ContentHeader'
import ContentBody   from '../ContentBody/ContentBody'
import SortGallery   from '../../SortGallery/SortGallery'


const GalleryLayout = () => {
	return (
		<ContentBody>
			<ContentHeader/>
			<SortGallery/>
			<Outlet/>
		</ContentBody>
	)
}

export default GalleryLayout