import React from 'react'
import s     from './SingleBreedInfo.module.scss'

import { Swiper, SwiperSlide }                               from 'swiper/react'
import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { TSingleBreed } from '../../redux/Breeds/types'
import { TSlider }      from './types'


const Slider: React.FC<TSlider> = ({ singleBreed }) => {
	SwiperCore.use([ Pagination, EffectCoverflow, Autoplay ])

	return (
		<Swiper
			className={ s.breed__main_slider }
			pagination={ { clickable: true } }
			effect='coverflow'
			coverflowEffect={ { rotate: 100, slideShadows: false } }
			slidesPerView={ 1 }
			wrapperTag='ul'
			autoplay={ { delay: 5000, disableOnInteraction: false } }>
			{
				singleBreed.map((sliderEl: TSingleBreed) => (
					<SwiperSlide tag='li' className={ s.breed__img_wr } key={ sliderEl.image }>
						<img src={ sliderEl.image } alt=''/>
					</SwiperSlide>
				))
			}
		</Swiper>
	)
}

export default Slider