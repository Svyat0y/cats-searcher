import { FC }             from 'react'
import s                  from './ErrorBoundary.module.scss'
import { TErrorFallBack } from './types'

import { Button } from '../../Ui'

import sleepImg from '../../../assets/images/common/sleep2.jpg'


const ErrorFallBack: FC<TErrorFallBack> = ({ setHasError }) => {
	const onClickBtn = () => {
		setHasError(false)
	}

	return (
		<div className={ s.wrapper }>
			<div className={ s.imgWrapper }>
				<img src={ sleepImg } alt='img'/>
			</div>
			<span className={ s.title }>Ohh.. the cats are sleeping :((</span>
			<span className={ s.subTitle }>Are you sure you want to wake them up????</span>
			<Button onclick={ onClickBtn } name='Yes, I am a monster!!!'/>
		</div>
	)
}

export default ErrorFallBack