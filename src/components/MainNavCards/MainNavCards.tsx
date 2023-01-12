import { FC } from 'react'
import s      from './MainNavCards.module.scss'

import { useCardsData } from '../../hooks/useCardsData'
import Card             from './Card'


const MainNavCards: FC = () => {
	const cards = useCardsData()

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
