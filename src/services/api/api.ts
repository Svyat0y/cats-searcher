import axios                from 'axios'
import { setIsErrorBreeds } from '../../redux/Breeds/slice'
import { useAppDispatch }   from '../../redux/store'


export const instance = axios.create({
	baseURL: 'https://api.thecatapi.com/v1/',
	headers: {
		'content-type': 'application/json',
		'x-api-key': 'live_DVpAb9Bkg7Z5foosCoW0ZtaMOCEYvoEtIipbdBFqLKSFO5u0P6s0zOH6X96kP3YP',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	}
})


/*
instance.interceptors.response.use(response => {
	return response
}, error => {
	if (error.response.status.toString()[0] === '4' || error.response.status.toString()[0] === '5') {
		useAppDispatch()(setIsErrorBreeds(true))
		return Promise.reject(error)
	}
	else{
		throw error
	}
})
*/
