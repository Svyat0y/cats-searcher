import { FC } from 'react'

import { useAppDispatch } from '../redux/store'
import { useSelector }    from 'react-redux'
import { selectVoting }   from '../redux/voting/selectors'

import { ContentBody, Favourites } from '../components'


const WithFavData: FC = () => {
	const dispatch = useAppDispatch()
	const { favoritesData, infoMessage, status, favPage } = useSelector(selectVoting)

	const favData = { dispatch, infoMessage, data: favoritesData, page: favPage, status }

	return (
		<ContentBody>
			<Favourites { ...favData }/>
		</ContentBody>
	)
}

export default WithFavData