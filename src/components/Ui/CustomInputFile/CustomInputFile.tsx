import { FC }               from 'react'
import s                    from './CustomInputFile.module.scss'
import { TCustomInputFile } from '../../UploadModal/types'

import noImg from '../../../assets/images/common/noImg.svg'


const CustomInputFile: FC<TCustomInputFile> = ({ handleDrop, handleDragEmpty, handleChange, imageUrl, file }) => {

	return (
		<div className={ s.wrapper }>
			<label
				htmlFor='file_loader_btn'
				className={ s.customBtn }
				onDrop={ handleDrop }
				onDragEnter={ handleDragEmpty }
				onDragOver={ handleDragEmpty }>
				{
					!file &&
					<p>
						<span className={ s.blackWhite }>Drag here</span> your file or <span
						className={ s.blackWhite }>Click here</span> to
						upload
					</p>
				}
			</label>
			<input
				onChange={ handleChange }
				type='file' id='file_loader_btn'
				className={ s.uploadBtn }
			/>
			<img src={ imageUrl ? imageUrl : noImg } alt='image'/>
		</div>
	)
}

export default CustomInputFile