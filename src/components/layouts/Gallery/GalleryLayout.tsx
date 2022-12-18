import React      from 'react'
import { Outlet } from 'react-router-dom'

import { ContentBody, ContentHeader, SortGallery } from '../../index'


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