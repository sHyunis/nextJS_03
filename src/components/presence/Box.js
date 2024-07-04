// staggerChildren
// AnimatePresence
// map 여러개 돌린 것처럼 자식을 관리한다.
// 애니메이션이 시작될때와 애니메이션이 끝날때를 관리한다.
'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Box = () => {

    const Variants = {
        hidden : { opacity : 0, x : -100 },
        visible : { opacity : 1, x : 0 },
        exit : { opacity : 0, x : 100 }
    }

    const [ isVisible, setIsVisible ] = useState(true);

  return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}> Toggle </button>
        <AnimatePresence>
            {// true이면 initial과 animate가 스스로 실행 false면 exit가 스스로 실행 -> 로딩을 무한을 돌리기 위한 전초작업
             isVisible && <motion.div
                    variants={Variants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                >
                    Running AnimatePresence
                </motion.div>
            }
        </AnimatePresence>
    </div>
  )
}

export default Box