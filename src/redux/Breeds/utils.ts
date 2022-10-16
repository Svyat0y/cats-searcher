import qs from 'qs'


const params: any = qs.parse(window.location.search.slice(1))

export const getBreedValue = () => {
	if (window.location.search) {
		return params.q
	}
}