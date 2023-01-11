import { FC }      from 'react'
import s           from './SingleBreedInfo.module.scss'
import { TSlider } from './types'


const SliderDesc: FC<TSlider> = ({ singleBreed }) => {

	return (
		<div className={ s.featureWrapper }>
			<h1 className={ s.title }>{ singleBreed[0].name }</h1>
			<p className={ s.subTitle }>{ singleBreed[0].desc }</p>
			<div className={ s.descWrapper }>
				<ul className={ s.left }>
					<li className={ s.desc }>
						<span className={ `${ s.descHighlight } ${ s.withBR }` }>Temperament: </span>
						{ singleBreed[0].temperament }
					</li>
				</ul>
				<ul className={ s.right }>
					<li className={ s.desc }>
						<span className={ s.descHighlight }>Origin: </span>{ singleBreed[0].origin }
					</li>
					<li className={ s.breed__desc }>
						<span className={ s.descHighlight }>Weight: </span>{ singleBreed[0].weight } kg
					</li>
					<li className={ s.breed__desc }>
						<span className={ s.descHighlight }>Life span: </span>{ singleBreed[0].life_span } years
					</li>
				</ul>
			</div>
		</div>
	)
}

export default SliderDesc