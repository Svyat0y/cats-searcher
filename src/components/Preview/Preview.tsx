import { FC } from 'react'
import s      from './Preview.module.scss'

import previewImg from '../../assets/images/main/preview.webp'


const Preview: FC = () => {

	return (
		<div className={ s.wrapper }>
			<div className={ s.imgWrapper }>
				<img src={ previewImg } alt='preview_img'/>
			</div>
		</div>
	)
}

export default Preview
