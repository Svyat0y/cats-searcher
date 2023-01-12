import { useSelector }  from 'react-redux'
import { selectSearch } from '../redux/Search/selectors'

import voteImg     from '../assets/images/main/vote-table.webp'
import petBreedImg from '../assets/images/main/pet-breeds.webp'
import searchImg   from '../assets/images/main/images-search.webp'


export const useCardsData = () => {
	const { breedFilters: { value, limit, order, page }, galleryFilters } = useSelector(selectSearch)

	return [
		{ name: 'Voting', img: voteImg, color: 'violet', to: 'voting', active: 'voting' },
		{
			name: 'Breeds',
			img: petBreedImg,
			color: 'green',
			to: `breeds?q=${ value }&limit=${ limit }&order=${ order }&page=${ page + 1 }`,
			active: 'breeds'
		},
		{
			name: 'Gallery',
			img: searchImg,
			color: 'yellow',
			to: `gallery?q=${ galleryFilters.value }&type=${ galleryFilters.type }&limit=${ galleryFilters.limit }&order=${ galleryFilters.order }&page=${ galleryFilters.page + 1 }`,
			active: 'gallery'
		},
	]
}