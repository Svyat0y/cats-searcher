import { useState, useEffect } from 'react'


const getWindowDimensions = () => window.innerWidth

export default function useWindowDimensions() {
	const [ windowDimensions, setWindowDimensions ] = useState<number>(getWindowDimensions())

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowDimensions
}