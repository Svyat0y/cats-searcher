import React, { useEffect, useState } from 'react'
import s                              from './Favourites.module.scss'
import axios                          from 'axios'

import emptyImg from '../../../assets/images/voting/empty_img.png'


const Favourites: React.FC = () => {
	const [ data, setData ] = useState([])

	useEffect(() => {
		axios.get('https://api.thecatapi.com/v1/favourites?&limit=50&order=DESC', {
			headers: {
				'content-type': 'application/json',
				'x-api-key': 'live_DVpAb9Bkg7Z5foosCoW0ZtaMOCEYvoEtIipbdBFqLKSFO5u0P6s0zOH6X96kP3YP'
			}
		}).then(({ data }) => {
			setData(data)
		})
	}, [])

	return (
		<div className={ s.favourites }>
			{ data?.map((el: any, i) => {
				return (
					<div className={ s.favourites__img_wr } key={ el.id }>
						<img src={ el.image.url ? el.image.url : emptyImg } alt='image'/>
					</div>
				)
			}) }
		</div>
	)
}

export default Favourites
