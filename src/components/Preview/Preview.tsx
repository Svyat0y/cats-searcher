import React from 'react'
import s     from './Preview.module.scss'

import previewImg from '../../assets/images/main/preview.webp'


const Preview: React.FC = () => {

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__img_wr }>
				<img src={ previewImg } alt='preview_img'/>
			</div>
		</div>
	)
}

export default Preview
