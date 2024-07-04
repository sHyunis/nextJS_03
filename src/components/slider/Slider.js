'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import './Slider.css'

const Slider = () => {
  const [ num, setNum ] = useState(0);
  return (
    <div className='relative w-full h-screen border-2 border-solid'>
        <motion.div className='flex w-screen'
                    animate={{ x : ( num * -300 ) }}
                    // drag='x'
        >
        {
            [0, 1, 2].map(item => <motion.div className='img'
                                              whileHover={{ scale : 1.2 }}
            > img {item} </motion.div>)
        }
        </motion.div>
        <ul className='flex gap-10'>
            {
                [0, 1, 2].map(item => (
                    <motion.li className='w-10 h-10 text-white rounded-full'
                               animate={{ 
                                backgroundColor : item === num ? 'black' : 'white',
                                color : item === num ? 'white' : 'black'
                               }}
                               onClick={() => setNum(item)} 
                    > {item} </motion.li>
                ))
            }
        </ul>
        
        {/* 인디케이터, 무한으로 돌아가는 슬라이더 */}
        <button onClick={ () => setNum( num > 0 ? num - 1 : 2 ) }
                className='absolute left-10 z-50 top-10'
        >prev</button>
        <button onClick={ () => setNum( num < 2 ? num + 1 : 0 ) }
                className='absolute right-10 z-50 top-10'
        >next</button>

    </div>
  )
}

export default Slider