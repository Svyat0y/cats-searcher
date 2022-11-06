import React, { useEffect, useState } from 'react'
import { TDislikes }                  from './types'

import { TDataObj }     from '../../../redux/voting/types'
import { setActiveBtn } from '../../../redux/voting/slice'

import { SkeletonLoader } from '../../common'


const Dislikes: React.FC<TDislikes> = ({ unlikeData, dispatch }) => {
	const [ isLoading, setIsLoading ] = useState(false)
	const noItemsBoolean = (unlikeData.length === 0)

	useEffect(() => {
		dispatch(setActiveBtn('Dislikes'))
	}, [])

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (unlikeData && unlikeData?.length >= 0) timeoutId = setTimeout(() => setIsLoading(false), 1000)

		return () => clearTimeout(timeoutId)
	}, [ unlikeData ])

	if (isLoading) return <SkeletonLoader count={ 10 }/>

	return (
		<>
			{ noItemsBoolean ? <div className='noItemFound'><span>No item found.</span></div> : '' }
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
