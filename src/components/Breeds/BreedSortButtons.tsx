import React from 'react'
import s     from './Breeds.module.scss'


const BreedSortButtons: React.FC = () => {
	return (
		<>
			<button className={ `${ s.sortBreedBtn } ${ s.desk }` }></button>
			<button className={ `${ s.sortBreedBtn } ${ s.ask }` }></button>
		</>
	)
}

export default BreedSortButtons