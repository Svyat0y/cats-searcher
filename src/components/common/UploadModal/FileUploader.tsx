import React, { useState } from 'react'
import s                   from './FileUploader.module.scss'

import { Button } from '../index'
import noImg      from '../../../assets/images/noImg.svg'


const FileUploader = () => {
	const [ image, setImage ] = useState<File | null>(null)
	const [ imageUrl, setImageUrl ] = useState<string | ArrayBuffer | null>(null)
	const fileReader = new FileReader()

	fileReader.onloadend = () => {
		setImageUrl(fileReader.result)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		if (e.target.files !== null) {
			const file = e.target.files[0]
			setImage(file)
			fileReader.readAsDataURL(file)
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		e.stopPropagation()
	}

	return (
		<form className={ s.wrapper } onSubmit={ handleSubmit }>
			<div className={ s.custom_wrapper }>
				<label htmlFor='file_loader_btn' className={ s.customBtn }>
					<p>
						<span className={ s.blackWhite }>Drag here</span> your file or <span className={ s.blackWhite }>Click here</span> to
						upload
					</p>
				</label>
				<input
					onChange={ handleChange }
					type='file' id='file_loader_btn'
					className={ s.uploadBtn }/>
				<img
					src={ imageUrl ? imageUrl : noImg }
					alt='picture'
					className={ s.fileLoader_preview }
				/>
			</div>
			<span className={ s.imgInfo }>{ image ? image.name : 'No file selected' }</span>
			<Button name='Upload Photo'/>
		</form>
	)
}

export default FileUploader