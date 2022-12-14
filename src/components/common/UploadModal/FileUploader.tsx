import React, { useState } from 'react'
import s                   from './FileUploader.module.scss'

import { Button }           from '../index'
import noImg                from '../../../assets/images/noImg.svg'
import { fetchUploadImage } from '../../../redux/Upload/asyncActions'
import { TFileUploader }    from './types'


const FileUploader: React.FC<TFileUploader> = ({ dispatch, message, isLoaded }) => {
	const [ file, setFile ] = useState<File | null>(null)
	const [ imageUrl, setImageUrl ] = useState<string | ArrayBuffer | null>(null)
	const fileReader = new FileReader()

	fileReader.onloadend = () => {
		setImageUrl(fileReader.result)
	}

	const setEventDefault = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault()
		e.stopPropagation()
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEventDefault(e)
		if (e.target.files !== null) {
			const file = e.target.files[0]
			setFile(file)
			fileReader.readAsDataURL(file)
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setEventDefault(e)
		dispatch(fetchUploadImage(file))
	}

	const handleDragEmpty = (e: React.DragEvent<HTMLLabelElement>) => {
		setEventDefault(e)
	}

	const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
		setEventDefault(e)
		if (e.dataTransfer.files.length) {
			const file = e.dataTransfer.files[0]
			setFile(file)
			fileReader.readAsDataURL(file)
		}
	}

	return (
		<form className={ s.wrapper } onSubmit={ handleSubmit }>
			<div className={ s.custom_wrapper }>
				<label
					htmlFor='file_loader_btn'
					className={ s.customBtn }
					onDrop={ handleDrop }
					onDragEnter={ handleDragEmpty }
					onDragOver={ handleDragEmpty }
				>
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
					className={ s.uploadBtn }/>
				<img
					src={ imageUrl ? imageUrl : noImg }
					alt='picture'
					className={ s.fileLoader_preview }
				/>
			</div>
			<span className={ s.imgInfo }>{ file ? `Image file name: ${ file.name }` : 'No file selected' }</span>
			<span>{ message }</span>
			<Button name='Upload Photo'/>
		</form>
	)
}

export default FileUploader