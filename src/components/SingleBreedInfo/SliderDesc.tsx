import React       from 'react'
import s           from './SingleBreedInfo.module.scss'
import { TSlider } from './types'


const SliderDesc: React.FC<TSlider> = ({ singleBreed }) => {
	
	return (
		<div className={ s.breed__feature_wr }>
			<h1 className={ s.breed__title }>{ singleBreed[0].name }</h1>
			<h1 className={ s.breed__subTitle }>{ singleBreed[0].desc }</h1>
			<div>
				<div className={ s.breed__desc_wr }>

					<ul className={ s.breed__left }>
						<li className={ s.breed__desc }>
							<span className={ s.breed__desc__span }>Temperament: </span><br/>
							{ singleBreed[0].temperament }
						</li>
					</ul>

					<ul className={ s.breed__right }>
						<li className={ s.breed__desc }>
							<span className={ s.breed__desc__span }>Origin: </span>{ singleBreed[0].origin }
						</li>
						<li className={ s.breed__desc }>
							<span className={ s.breed__desc__span }>Weight: </span>{ singleBreed[0].weight } kg
						</li>
						<li className={ s.breed__desc }>
							<span className={ s.breed__desc__span }>Life span: </span>{ singleBreed[0].life_span } years
						</li>
					</ul>

				</div>
			</div>
		</div>
	)
}

export default SliderDesc