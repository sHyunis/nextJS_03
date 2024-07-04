'use client'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
const outBox = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    width : "100%",
    height : "100vh"
}
const box = {
    width : "200px",
    height : "200px",
    backgroundColor : "skyblue"
}
const MoveBox = () => {
    const [ isVisible, setIsVisible ] = useState(true);

  return (
    <div>
        <button onClick={ () => setIsVisible(!isVisible) }>이미지 제어 버튼</button>     
        <div style={ outBox }>
            <AnimatePresence>
                {// 처음은 false라서 안보인다.
                    isVisible && <motion.div style={ box }
                                             initial={{ opacity : 0, x : -100 }}
                                             animate={{ opacity : 1, x : 0 }}
                                             exit={{ opacity : 0, x : 100 }}
                    > motion div </motion.div>
                }
            </AnimatePresence>
        </div>

    </div>
  )
}

export default MoveBox