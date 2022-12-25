import { FC } from 'react'
import s      from './MainNavCards.module.scss'

import { useSelector }  from 'react-redux'
import { selectSearch } from '../../redux/Search/selectors'

import Card from './Card'

import voteImg     from '../../assets/images/main/vote-table.webp'
import petBreedImg from '../../assets/images/main/pet-breeds.webp'
import searchImg   from '../../assets/images/main/images-search.webp'


const MainNavCards: FC = () => {
	const { breedFilters: { value, limit, order, page }, galleryFilters } = useSelector(selectSearch)

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
		<div className={ s.wrapper }>
			<div className={ s.headerWrapper }>
				<h1 className='title'>Hi ;)</h1>
				<p>Welcome to the Cat finder</p>
			</div>
			<span className={ s.cardsDesc }>
					Lets start using The Cat API
				</span>
			<div className={ s.cards }>
				{ cards.map((card) => <Card key={ card.name } { ...card }/>) }
			</div>
		</div>
	)
}

export default MainNavCards
