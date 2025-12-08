// src/main.jsx (твой файл)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/Header.tsx'
import './globalStyles/global.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='app-root'>
			<Header />
			<main className='app-main'>
				<App />
			</main>
			<Footer />
		</div>
	</StrictMode>
)
