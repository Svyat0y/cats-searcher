import { FC }                                                from 'react'
import s                                                     from './SingleBreedInfo.module.scss'
import { TSlider }                                           from './types'
import { TSingleBreed }                                      from '../../redux/Breeds/types'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import { Swiper, SwiperSlide }                               from 'swiper/react'


const Slider: FC<TSlider> = ({ singleBreed }) => {
	SwiperCore.use([ Pagination, EffectCoverflow, Autoplay ])

	return (
		<Swiper
			className={ s.mainSlider }
			pagination={ { clickable: true } }
			effect='coverflow'
			coverflowEffect={ { rotate: 100, slideShadows: false } }
			slidesPerView={ 1 }
			wrapperTag='ul'
			autoplay={ { delay: 5000, disableOnInteraction: false } }>
			{
				singleBreed.map((sliderEl: TSingleBreed) => (
					<SwiperSlide tag='li' className={ s.imgWrapper } key={ sliderEl.image }>
						<img src={ sliderEl.image } alt=''/>
					</SwiperSlide>
				))
			}
		</Swiper>
	)
}

export default Slider