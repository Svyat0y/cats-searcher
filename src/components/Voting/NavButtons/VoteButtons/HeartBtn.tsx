import { FC }        from 'react'
import s             from '../NavButtons.module.scss'
import { THeartBtn } from './types'
import { TDataObj }  from '../../../../redux/voting/types'

import { SmallSpinner } from '../../../index'

import heartTWhiteImg      from '../../../../assets/images/voting/heartWhite.webp'
import heartTransparentImg from '../../../../assets/images/voting/heartTransparent.webp'


const HeartBtn: FC<THeartBtn> = ({ onFavourite, imgObj, status, onFavourites, setBtnName, btnName }) => {
	const imgInFavourites = onFavourites.find((el: TDataObj) => el?.id === imgObj?.id)

	const onClickBtn = (imgObj: TDataObj) => {
		if (!imgInFavourites) {
			setBtnName('voteFavourite')
			onFavourite(imgObj)
		}
	}

	return (
		<button
			disabled={ status === 'pending' }
			onClick={ () => onClickBtn(imgObj) }
			className={ `${ s.navButtonWrapper } ${ s.heartBg }` }>
			{
				status === 'pending' && btnName === 'voteFavourite'
					? <SmallSpinner height={ 20 } width={ 20 } color='#FFFFFF'/>
					: <img className={ s.heartImg } src={ !imgInFavourites ? heartTransparentImg : heartTWhiteImg } alt='icon'/>
			}
		</button>
	)
}

export default HeartBtn
