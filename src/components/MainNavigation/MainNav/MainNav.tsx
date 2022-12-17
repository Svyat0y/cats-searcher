import React from 'react'
import s     from './MainNav.module.scss'

import { useSelector }  from 'react-redux'
import { selectSearch } from '../../../redux/Search/selectors'

import Card from './Card'

import voteImg     from '../../../assets/images/main/vote-table.webp'
import petBreedImg from '../../../assets/images/main/pet-breeds.webp'
import searchImg   from '../../../assets/images/main/images-search.webp'


const MainNav: React.FC = () => {
	const { filters: { value, limit, order, page }, galleryFilters } = useSelector(selectSearch)

	const cards = [
		{ name: 'Voting', img: voteImg, color: 'violet', to: 'voting', active: 'voting' },
		{
			name: 'Breeds',
			img: petBreedImg,
			color: 'green',
			to: `breeds?q=${ value }&limit=${ limit }&order=${ order }&page=${ page + 1 }`,
			active: 'breeds'
		},
		{
			name: 'Gallery',
			img: searchImg,
			color: 'yellow',
			to: `gallery?q=${ galleryFilters.value }&type=${ galleryFilters.type }&limit=${ galleryFilters.limit }&order=${ galleryFilters.order }&page=${ galleryFilters.page + 1 }`,
			active: 'gallery'
		},
	]

	return (
		<div className={ s.content }>
			<div className={ s.title_wr }>
				<h1 className='title'>Hi ;)</h1>
				<p>Welcome to the Cat finder</p>
			</div>
			<div className={ s.content__cards_wr }>
				<span className={ s.content__cards_desc }>
					Lets start using The Cat API
				</span>
				<div className={ s.content__cards }>
					{ cards.map((card) => <Card key={ card.name } { ...card }/>) }
				</div>
			</div>
		</div>
	)
}

export default MainNav
