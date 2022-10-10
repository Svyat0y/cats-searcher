import React, { useEffect, useState } from 'react'

import { TDataObj }     from '../../../redux/voting/types'
import { setActiveBtn } from '../../../redux/voting/slice'
import { TDislikes }    from './types'
import { Spinner }      from '../../common'


const Dislikes: React.FC<TDislikes> = ({ unlikeData, status, dispatch }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (unlikeData.length === 0 && status === 'success')

	useEffect(() => {
		dispatch(setActiveBtn('Dislikes'))
	}, [])

	useEffect(() => {
		setIsLoading(true)
		const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ status ])

	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound'><span>No item found.</span></div> }
			<div className='items'>
				{ unlikeData?.map((el: TDataObj) => {
					return (
						<div className='itemsImg_wr unHoverClass' key={ el?.id }>
							<img src={ el?.url } alt='image'/>
						</div>
					)
				}) }
			</div>
		</>
	)
}

export default Dislikes
