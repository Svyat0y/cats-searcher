import { FC } from 'react'

import { useAppDispatch } from '../redux/store'
import { useSelector }    from 'react-redux'
import { selectVoting }   from '../redux/voting/selectors'

import { ContentBody, Likes } from '../components'


const WithLikesData: FC = () => {
	const dispatch = useAppDispatch()
	const { likeData, status, likePage } = useSelector(selectVoting)

	const likesData = { dispatch, data: likeData, page: likePage, status }

	return (
		<ContentBody>
			<Likes { ...likesData }/>
		</ContentBody>
	)
}

export default WithLikesData