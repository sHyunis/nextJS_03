import Accordion2 from '@/components/animatePresence/Accordion2'
import Tabs from '@/components/animatePresence/Tabs'
import Box from '@/components/presence/Box'
import Slider from '@/components/slider/Slider'
import React from 'react'

// localhost:3000/
// localhost:3000/movies
// localhost:3000/coins
// src/app/page.js

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <div className='m-auto w-11/12 grid gap-10 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <span className='block w-full h-50 bg-theme-green'>
          <Tabs />
        </span>
        <span className='block w-full h-50 bg-theme-green'>
          <Accordion2 />
        </span>
        <span className='block w-full h-50 bg-theme-green'> span3 </span>
        <span className='block w-full h-50 bg-theme-green'> span4 </span>
        
        {/* 모바일 퍼스트 */}
        <span className='block w-full h-50 bg-theme-green lg:hidden'> span5 </span>
        <span className='block w-full h-50 bg-theme-green lg:hidden'> span6 </span>
      </div>
    </div>
  )
}

export default Home