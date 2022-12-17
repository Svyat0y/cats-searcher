import React                from 'react'
import s                    from './CustomInputFile.module.scss'
import { TCustomInputFile } from '../../UploadModal/types'

import noImg from '../../../assets/images/common/noImg.svg'


const CustomInputFile: React.FC<TCustomInputFile> = ({ handleDrop, handleDragEmpty, handleChange, imageUrl, file }) => {

	return (
		<div className={ s.custom_wrapper }>
			<label
				htmlFor='file_loader_btn'
				className={ s.custom_btn }
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
				className={ s.upload_btn }
			/>
			<img src={ imageUrl ? imageUrl : noImg } alt='image'/>
		</div>
	)
}

export default CustomInputFile