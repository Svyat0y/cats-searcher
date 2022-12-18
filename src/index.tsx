import { StrictMode }    from 'react'
import { createRoot }    from 'react-dom/client'
import './scss/index.scss'
import { BrowserRouter } from 'react-router-dom'


import { Provider } from 'react-redux'
import { store }    from './redux/store'

import App from './App'


const rootElem = document.getElementById('root')

if (rootElem) {
	const root = createRoot(rootElem)
	root.render(
		<Provider store={ store }>
			<BrowserRouter>
				{/*<StrictMode>*/ }
				<App/>
				{/*</StrictMode>*/ }
			</BrowserRouter>
		</Provider>
	)
}

