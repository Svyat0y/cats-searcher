import { FC } from 'react'
import s      from './NoItemFound.module.scss'


const NoItemFound: FC = () => {

	return (
		<div className={ s.wrapper }>
			<span>
				No item found.
			</span>
		</div>
	)
}

export default NoItemFound