import axios from 'axios'


export const instance = axios.create({
	baseURL: 'https://api.thecatapi.com/v1/',
	headers: {
		'x-api-key': 'live_DVpAb9Bkg7Z5foosCoW0ZtaMOCEYvoEtIipbdBFqLKSFO5u0P6s0zOH6X96kP3YP'
	}
})
