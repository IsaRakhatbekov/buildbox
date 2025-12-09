import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
