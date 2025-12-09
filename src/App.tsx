import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const App: React.FC = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Layout>
		</Router>

	)
}

export default App
