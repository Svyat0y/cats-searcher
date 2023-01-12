import { FC }     from 'react'
import s          from './Close.module.scss'
import { TClose } from './types'


const Close: FC<TClose> = ({ onClick }) => {
	return (
		<button className={ s.wrapper } onClick={ onClick }></button>
	)
}

export default Close