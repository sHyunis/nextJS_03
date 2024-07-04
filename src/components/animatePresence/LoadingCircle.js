'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// useAnimate : 이벤트 처리에 더 최적화 되어 있는 Animation Presence

const style = {
    width : '50px',
    height : '50px',
    borderRadius : '50px'
}

const LoadingCircle = () => {

  return (
    <div>
        <AnimatePresence>
            <div style={{ display : 'flex'}}>
                {
                    [0,1,2,3].map(item => (
                        <motion.div key={item}
                                    style={style}
                                    initial={{ backgroundColor : '#efefef' }}
                                    animate={{ backgroundColor : '#000000' }}
                                    exit={{ backgroundColor : '#efefef' }}
                                    transition={{
                                        duration : 0.8,
                                        delay : item * 0.2,
                                        repeat : Infinity,
                                        repeatType : 'loop'
                                    }}
                        ></motion.div>
                    ))
                }
            </div>
        </AnimatePresence>
    </div>
  )
}

export default LoadingCircle