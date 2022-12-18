import { FC }                from 'react'
import s                     from './FileUploader.module.scss'
import { TUploadFormFooter } from '../types'

import { Button } from '../../Ui'

import loadedImg   from '../../../assets/images/common/loadedOk.webp'
import NoLoadedImg from '../../../assets/images/common/loadedNo.webp'


const UploadFormFooter: FC<TUploadFormFooter> = ({ file, message, isLoaded, status }) => {

	return (
		<>
			<span className={ s.imgInfo }>{ file ? `Image file name: ${ file.name }` : 'No file selected' }</span>
			{
				(file && !message)
					? <Button
						disabled={ status === 'pending' }
						name={ status === 'pending' ? 'Uploading' : 'Upload Photo' }
						status={ status }
						isActive
						modalUpload
					/>
					: <>
						{
							message
								? <p className={ s.message }>
									<img src={ isLoaded ? loadedImg : NoLoadedImg } alt='icon'/>
									{ message }
								</p>
								: ''
						}
					</>
			}
		</>
	)
}

export default UploadFormFooter