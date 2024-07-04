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

// const Item = ({ item }) => {
// const Item = ({ id, title, content }) => {
const Item = ({ title, content }) => {
    const [ isVisible, setIsVisible ] = useState(false);

  return (
    <div style={{ width : '500px'}}>
        <div onClick={( () => setIsVisible(!isVisible) )}>
            <h2>
                {/* { item.title } <span>{ isVisible ? '-' : '+' }</span> */}
                { title } <span>{ isVisible ? '-' : '+' }</span>
            </h2>
        </div>
        <div>
            <AnimatePresence>
                {// 처음은 false라서 안보인다.
                    isVisible && <motion.div
                                             initial={{ opacity : 0, height : 0, overflow : 'hidden' }}
                                             animate={{ opacity : 1, height : 100, overflow : 'hidden' }}
                                             exit={{ opacity : 0, height : 0, overflow : 'hidden' }}
                    // > { item.content } </motion.div>
                    > { content } </motion.div>
                }
            </AnimatePresence>
        </div>
    </div>
  )
}

const Accordion = () => {
    return (
        <div>
            {
                // datas.map((item, index) => <Item key={index} item={item} />)
                datas.map((item, index) => <Item key={index} {...item} />) // item 을 디스트럭쳐링 하는 방식
                // 즉 id=1 title={title} content={content} 방식으로 넘어감
            }
        </div>
    )
}
export default Accordion