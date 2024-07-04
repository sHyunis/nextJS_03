'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// useAnimate : 이벤트 처리에 더 최적화 되어 있는 Animation Presence

const style = {
    width : '50px',
    height : '50px',
    borderRadius : '50px'
}

const LoadingText = () => {

    const text = "로딩중입니다......."

  return (
    <div>
        <AnimatePresence>
            <div>
                { // 글씨를 배열로 만들어서
                    text.split('').map((item, index) => (
                        <motion.span key={item}
                                    initial={{ opacity : 0 }}
                                    animate={{ opacity : 1 }}
                                    exit={{ opacity : 0 }}

                                    transition={{
                                        duration : 2,
                                        delay : index * 0.1,
                                        repeat : Infinity,
                                        // repeatType : 'loop'
                                    }}
                        >{item}</motion.span>
                    ))
                }
            </div>
        </AnimatePresence>
    </div>
  )
}

export default LoadingText