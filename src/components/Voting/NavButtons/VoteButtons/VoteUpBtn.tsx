import React          from 'react'
import s              from '../NavButtons.module.scss'
import { TVoteUpBtn } from './types'
import { TDataObj }   from '../../../../redux/voting/types'

import { SmallSpinner } from '../../../index'


const VoteUpBtn: React.FC<TVoteUpBtn> = ({ onLike, imgObj, status, setBtnName, btnName }) => {

	const onClickBtn = (imgObj: TDataObj) => {
		setBtnName('voteUp')
		onLike(imgObj)
	}

	return (
		<button
			disabled={ status === 'pending' }
			onClick={ () => onClickBtn(imgObj) }
			className={ `${ s.nav_button_wr } ${ s.like_bg }` }>
			{
				status === 'pending' && btnName === 'voteUp'
					? <SmallSpinner height={ 20 } width={ 20 } color='#FFFFFF'/>
					: <svg
						width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z'
							fill=''/>
					</svg>
			}
		</button>
	)
}

export default VoteUpBtn
