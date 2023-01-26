import { FC, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch }  from '../../../redux/store'
import { setToSearchData } from '../../../redux/Search/slice'

import { VotingImage }  from '../../index'
import VotingLayout     from './VotingLayout'
import ErrorBoundary    from '../../shared/ErrorBoundary/ErrorBoundary'
import { useSelector }  from 'react-redux'
import { selectVoting } from '../../../redux/voting/selectors'


const Voting: FC = () => {
	const dispatch = useAppDispatch()

	const {
		voteData,
		infoMessage,
		onFavourites,
		status,
	} = useSelector(selectVoting)

	const voteImgData = { dispatch, voteData, onFavourites, infoMessage, status }

	useEffect(() => {
		return () => {
			dispatch(setToSearchData(null))
		}
	}, [])

	return (
		<Routes>
			<Route path='/' element={ <VotingLayout/> }>
				<Route index element={ <ErrorBoundary> <VotingImage { ...voteImgData }/> </ErrorBoundary> }/>
			</Route>
		</Routes>
	)
}

export default Voting
