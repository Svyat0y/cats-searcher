import React from 'react'
import s     from './MainNav.module.scss'

import voteImg     from '../../../assets/images/vote-table.webp'
import petBreedImg from '../../../assets/images/pet-breeds.webp'
import searchImg   from '../../../assets/images/images-search.webp'

import Card             from './Card'
import { useSelector }  from 'react-redux'
import { selectSearch } from '../../../redux/Search/selectors'


const MainNav: React.FC = () => {
	const { filters: { value, limit, order } } = useSelector(selectSearch)

	const cards = [
		{ name: 'Voting', img: voteImg, color: 'violet', to: 'voting' },
		{ name: 'Breeds', img: petBreedImg, color: 'green', to: `breeds?q=${ value }&limit=${ limit }&order=${ order }` },
		{ name: 'Gallery', img: searchImg, color: 'yellow', to: 'gallery' },
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
					{ cards.map((card, i) =>
						<Card
							key={ i }
							name={ card.name }
							img={ card.img }
							color={ card.color }
							to={ card.to }
						/>
					) }
				</div>
			</div>
		</div>
	)
}

export default MainNav
