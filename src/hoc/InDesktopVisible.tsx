import useWindowDimensions from '../hooks/useWindowDimensions'
import { ReactNode }       from 'react'


const InDesktopVisible = ({ children }: { children: ReactNode }) => {
	const viewportWidth = useWindowDimensions()

	return (
		<>
			{ viewportWidth > 768 && children }
		</>
	)
}

export default InDesktopVisible