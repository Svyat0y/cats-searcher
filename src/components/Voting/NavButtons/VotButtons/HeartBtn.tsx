import React from 'react'
import s     from '../NavButtons.module.scss'

import { TDataObj }  from '../../../../redux/voting/types'
import { THeartBtn } from './types'

import heartTWhiteImg      from '../../../../assets/images/voting/heartWhite.webp'
import heartTransparentImg from '../../../../assets/images/voting/heartTransparent.webp'


const HeartBtn: React.FC<THeartBtn> = ({ onFavourite, imgObj, status, onFavourites }) => {

	const imgInFavourites = onFavourites.find((el: TDataObj) => el?.id === imgObj?.id)

	return (
		<button
			disabled={ status === 'pending' }
			onClick={ () => onFavourite(imgObj) }
			className={ `${ s.nav_button_wr } ${ s.heart_bg }` }>
			<img src={ !imgInFavourites ? heartTransparentImg : heartTWhiteImg } alt='icon'/>
		</button>
	)
}

export default HeartBtn
