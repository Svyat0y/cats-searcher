import { FC } from 'react'

import { useAppDispatch } from '../redux/store'
import { useSelector }    from 'react-redux'
import { selectVoting }   from '../redux/voting/selectors'

import { ContentBody, ContentHeader, Dislikes } from '../components'


const WithDisData: FC = () => {
	const dispatch = useAppDispatch()
	const { unlikeData } = useSelector(selectVoting)

	const dislikesData = { dispatch, unlikeData }

	return (
		<ContentBody>
			<ContentHeader/>
			<Dislikes { ...dislikesData }/>
		</ContentBody>
	)
}

export default WithDisData