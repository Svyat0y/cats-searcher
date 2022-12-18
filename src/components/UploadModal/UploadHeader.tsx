import { FC } from 'react'
import s      from './UploadModal.module.scss'


const UploadHeader: FC = () => {
	return (
		<div className={ s.header }>
			<h5 className={ s.title }>
				Upload a .jpg or .png Cat Image
			</h5>
			<p className={ s.subTitle }>
				Any uploads must comply with the <span className={ s.subTitle__red }>upload guidelines</span> or face
				deletion.
			</p>
		</div>
	)
}

export default UploadHeader