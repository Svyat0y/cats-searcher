import React, { useEffect, useState } from 'react'
import s                              from '../Voting.module.scss'

import { TDataObj }     from '../../../redux/voting/types'
import { setActiveBtn } from '../../../redux/voting/slice'
import { TDislikes }    from './types'

import { Spinner } from '../../Spinner'


const Dislikes: React.FC<TDislikes> = ({ unlikeData, status, dispatch }) => {
	const [ isLoading, setIsLoading ] = useState(true)
	const noItemsBoolean = (unlikeData.length === 0 && status === 'success')

	// axios.get('https://api.thecatapi.com/v1/breeds/search/?q=american').then(data => console.log(data.data))


	useEffect(() => {
		dispatch(setActiveBtn('Dislikes'))
		setIsLoading(true)
		setTimeout(() => setIsLoading(false), 1000)
	}, [ status ])

	if (isLoading) return <Spinner/>

	return (
		<>
			{ noItemsBoolean && <div className='noItemFound'><span>No item found.</span></div> }
			<div className={ s.voting__items }>
				{ unlikeData?.map((el: TDataObj) => {
					return (
						<div className={ `${ s.voting__itemsImg_wr } ${ s.unHoverClass }` } key={ el?.id }>
							<img src={ el?.url } alt='image'/>
						</div>
					)
				}) }
			</div>
		</>
	)
}

export default Dislikes
