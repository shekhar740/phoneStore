import React, { Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
const Header = React.lazy(() => import('./components/Header'))
const Home = React.lazy(() => import('./pages/Home'))
import { motion, AnimatePresence } from 'framer-motion';
import Dashboard from './pages/Dashboard'
import Invoice from './pages/Invoice'

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
      </Routes>
      <div>
     
      </div>
    </>
  )
}

export default App