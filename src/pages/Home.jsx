import React from 'react'
import Mid from '../components/home/Mid'
import Features from '../components/home/Features'
import Report from '../components/home/Report'
import About from '../components/home/About'
import Prize from '../components/home/Prize'
import Slider from '../components/home/Slider'
const Top = React.lazy(() => import('../components/home/Top'))

const Home = () => {
  return (
    <>
    <Slider />
      <div className='md:px-48'>
        <Top />
        <Mid />
        <Features />
      </div>
      <Report />
      <About />
      <Prize />

    </>
  )
}

export default Home