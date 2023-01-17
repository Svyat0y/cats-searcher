import { ReactNode }       from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'


const InMobileVisible = ({ children }: { children: ReactNode }) => {
	const viewportWidth = useWindowDimensions()

	return (
		<>
			{ viewportWidth <= 768 && children }
		</>
	)
}

export default InMobileVisible