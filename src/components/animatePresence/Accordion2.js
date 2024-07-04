'use client'
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'

const datas = [
    {
        id: 1,
        title: 'title1',
        content: 'content1...'
    },
    {
        id: 2,
        title: 'title2',
        content: 'content2...'
    },
    {
        id: 3,
        title: 'title3',
        content: 'content3...'
    }
]

const hidden = {
    overflow : 'hidden'
}

const Item = ({ item, isVisible, onToggle }) => {
  return (
    <div style={{ width : '500px'}}>
        <div onClick={( () => onToggle(item.id) )}>
            <h2>
                {/* { item.title } <span> { isVisible ? '-' : '+' } </span> */}
                { item.title } <span> { isVisible === item.id ? '-' : '+' } </span>
            </h2>
        </div>
        <div>
            {/* \initial false를 하면 애니메이션이 무조건 안됐으면 할때 사용, 그외 다른 옵션들도 존재함 */}
            <AnimatePresence initial={false}>
                {// 처음은 false라서 안보인다.
                    // isVisible && <motion.div style={ hidden }
                    isVisible === item.id && <motion.div style={ hidden }
                                             initial={{ opacity : 0, height : 0 }}
                                             animate={{ opacity : 1, height : 100 }}
                                             exit={{ opacity : 0, height : 0 }}
                    > { item.content } </motion.div>
                }
            </AnimatePresence>
        </div>
    </div>
  )
}

const Accordion = () => {
    const [ isVisible, setIsVisible ] = useState(0);

    const toggleHandle = ( id ) => {
        setIsVisible( id === isVisible ? null : id ); // null 이 된다는것은 false가 됨을 의미 // 이때 초기화
    }
    return (
        <div>
            {
                datas.map((item, index) => <Item key={index} item={item} isVisible={isVisible} 
                                                onToggle={toggleHandle}
                />)
                                                
            }
        </div>
    )
}
export default Accordion