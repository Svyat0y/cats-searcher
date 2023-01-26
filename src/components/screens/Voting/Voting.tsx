import { FC, useEffect } from 'react'

import { useAppDispatch }  from '../../../redux/store'
import { setToSearchData } from '../../../redux/Search/slice'

import { ContentBody, ContentHeader, VotingImage } from '../../index'
import ErrorBoundary                               from '../../shared/ErrorBoundary/ErrorBoundary'
import { useSelector }                             from 'react-redux'
import { selectVoting }                            from '../../../redux/voting/selectors'


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
		<ContentBody>
			<ContentHeader/>
			<ErrorBoundary> <VotingImage { ...voteImgData }/> </ErrorBoundary>
		</ContentBody>
	)
}

export default Voting
