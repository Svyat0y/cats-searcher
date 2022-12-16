import React, { useEffect, useState } from 'react'
import s                              from './FileUploader.module.scss'
import { TFileUploader }              from './types'

import { fetchUploadImage } from '../../../redux/Upload/asyncActions'
import { setMessage }       from '../../../redux/Upload/slice'

import CustomInputFile  from './CustomInputFile'
import UploadFormFooter from './UploadFormFooter'


const setEventDefault = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement> | React.DragEvent<HTMLLabelElement>) => {
	e.preventDefault()
	e.stopPropagation()
}

const FileUploader: React.FC<TFileUploader> = ({ dispatch, message, isLoaded, status }) => {
	const [ file, setFile ] = useState<File | null>(null)
	const [ imageUrl, setImageUrl ] = useState<string | ArrayBuffer | null>(null)
	const fileReader = new FileReader()

	fileReader.onloadend = () => {
		setImageUrl(fileReader.result)
	}

	useEffect(() => {
		if (isLoaded) {
			setFile(null)
			setImageUrl(null)
		}
	}, [ isLoaded ])

	const fileHandling = (file: File) => {
		dispatch(setMessage(''))
		setFile(file)
		fileReader.readAsDataURL(file)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEventDefault(e)
		if (e.target.files !== null) {
			const file = e.target.files[0]
			fileHandling(file)
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		setEventDefault(e)
		file && dispatch(fetchUploadImage(file))
	}

	const handleDragEmpty = (e: React.DragEvent<HTMLLabelElement>) => {
		setEventDefault(e)
	}

	const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
		setEventDefault(e)
		if (e.dataTransfer.files.length) {
			const file = e.dataTransfer.files[0]
			fileHandling(file)
		}
	}

	return (
		<form className={ s.wrapper } onSubmit={ handleSubmit }>
			<CustomInputFile
				handleChange={ handleChange }
				handleDrop={ handleDrop }
				handleDragEmpty={ handleDragEmpty }
				file={ file }
				imageUrl={ imageUrl }
			/>
			<UploadFormFooter file={ file } message={ message } isLoaded={ isLoaded } status={ status }/>
		</form>
	)
}

export default FileUploader