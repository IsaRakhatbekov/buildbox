import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import './styles/global.scss'
import './styles/reset.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Header />
		<main>
			<App />
		</main>
		<Footer />
	</StrictMode>
)
