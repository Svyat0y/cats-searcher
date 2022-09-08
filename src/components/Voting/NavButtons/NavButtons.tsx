import React           from 'react'
import s               from './NavButtons.module.scss'
import { TDataObj }    from '../../../redux/voting/types'
import { TNavButtons } from './types'

import heartTransparentImg from '../../../assets/images/voting/heartTransparent.webp'
import heartTWhiteImg      from '../../../assets/images/voting/heartWhite.webp'


const NavButtons: React.FC<TNavButtons> = ({ onLike, onUnlike, imgObj, onFavourite, favoriteData, status }) => {

	const imgInFavourites = favoriteData.find((el: TDataObj) => el?.id === imgObj?.id)

	return (
		<div className={ s.voting__nav_buttons }>
			<button
				disabled={ status === 'pending' }
				onClick={ () => onLike(imgObj) }
				className={ `${ s.nav_button_wr } ${ s.like_bg }` }>
				<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='nonzero'
						clipRule='evenodd'
						d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z'
						fill=''/>
				</svg>
			</button>
			<button
				disabled={ status === 'pending' }
				onClick={ () => onFavourite(imgObj) }
				className={ `${ s.nav_button_wr } ${ s.heart_bg }` }>
				<img src={ !imgInFavourites ? heartTransparentImg : heartTWhiteImg } alt='icon'/>

			</button>
			<button
				disabled={ status === 'pending' }
				onClick={ () => onUnlike(imgObj) } className={ `${ s.nav_button_wr } ${ s.unlike_bg }` }>
				<svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='nonzero'
						clipRule='evenodd'
						d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z'
						fill=''/>
				</svg>
			</button>
		</div>
	)
}

export default NavButtons
