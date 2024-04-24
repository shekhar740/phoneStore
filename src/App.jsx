import React, { Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
const Header = React.lazy(() => import('./components/Header'))
const Home = React.lazy(() => import('./pages/Home'))

import Dashboard from './pages/Dashboard'
import Invoice from './pages/Invoice'
import Print from './utils/invoice/Print'
import Login from './pages/Login'
import Register from './pages/Register'
import Inventory from './pages/Inventory'

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/:id' element={<Dashboard />} />
        <Route path='/invoice/:name' element={<Invoice />} />
        <Route path='/bill' element={<Print />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/inventory/:id' element={<Inventory />} />
      </Routes>
      <div>
     
      </div>
    </>
  )
}

export default App