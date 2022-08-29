import React from 'react'
import s     from './MainNavigation.module.scss'

import logoLight   from './../../assets/images/logoLight.png'
import logoDark    from './../../assets/images/logoDark.png'
import eyeOpen     from './../../assets/images/eyeOpen.png'
import eyeClose    from './../../assets/images/eyeClose.png'
import voteImg     from './../../assets/images/vote-table.svg'
import petBreedImg from './../../assets/images/pet-breeds.svg'
import searchImg   from './../../assets/images/images-search.svg'

import { useSelector }               from 'react-redux'
import { useAppDispatch }            from '../../redux/store'
import { changeTheme }               from '../../redux/theme/slice'
import { themeFilter }               from '../../redux/theme/selectors'
import { onDarkTheme, onLightTheme } from '../../utils/theme'


const MainNavigation: React.FC = () => {
	const { theme } = useSelector(themeFilter)
	const dispatch = useAppDispatch()

	const onChangeTheme = () => {
		const json = JSON.stringify(theme === 'light' ? 'dark' : 'light')
		localStorage.setItem('theme', json)

		if (theme === 'light') {
			onDarkTheme()
			dispatch(changeTheme('dark'))
		}
		else{
			onLightTheme()
			dispatch(changeTheme('light'))
		}
	}

	return (
		<div className={ s.wrapper }>
			<div className={ s.wrapper__container }>
				<header className={ s.wrapper__header }>
					<div className={ s.wrapper__logo }>
						<img src={ theme === 'light' ? logoLight : logoDark } alt='logo'/>
					</div>
					<div className={ s.wrapper__navigation }>
						<div className={ s.wrapper__img_wr }>
							<img src={ theme === 'light' ? eyeOpen : eyeClose } alt='icon'/>
						</div>
						<div onClick={ onChangeTheme } className={ s.wrapper__switcher }>
							<input
								onChange={ () => console.log() }
								checked={ theme !== 'light' }
								id='switcher'
								type='checkbox'/>
							<label></label>
						</div>
					</div>
				</header>
				<div className={ s.wrapper__content }>
					<div className={ s.title_wr }>
						<h1 className='title'>Hi Intern</h1>
						<p>Welcome to MI 2022 Frontend test</p>
					</div>
					<div className={ s.wrapper__cards_wr }>
						<span className={ s.wrapper__cards_desc }>
							Lets start using The Cat API
						</span>
						<div className={ s.wrapper__cards }>
							<div className={ s.wrapper__card }>
								<div className={ s.card__bg_violet }>
									<div className={ s.card__img_wr }>
										<img src={ voteImg } alt='card'/>
									</div>
								</div>
								<div className={ `btn ${ s.card__btn }` }>Voting</div>
							</div>
							<div className={ s.wrapper__card }>
								<div className={ s.card__bg_green }>
									<div className={ s.card__img_wr }>
										<img src={ petBreedImg } alt='card'/>
									</div>
								</div>
								<div className={ `btn ${ s.card__btn }` }>Breeds</div>
							</div>
							<div className={ s.wrapper__card }>
								<div className={ s.card__bg_yellow }>
									<div className={ s.card__img_wr }>
										<img src={ searchImg } alt='card'/>
									</div>
								</div>
								<div className={ `btn ${ s.card__btn }` }>Gallery</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainNavigation
