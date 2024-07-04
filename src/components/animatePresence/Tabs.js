'use client'
import React, { useState } from 'react'
import './Tabs.css'
import { motion, AnimatePresence } from 'framer-motion'

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

const TabContent = ({content}) => {
    return (
        <motion.div initial={{ opacity : 0, y : 30 }}
                    animate={{ opacity : 1, y : 0 }}
                    exit={{ opacity : 0, y : -30 }}
                    transition={{ duration : 0.3 }}

                    className='w-50 h-10 bg-gray-100'
        >{content}</motion.div>
    )
}

const Tabs = () => {
  const [ num, setNum ] = useState(0);
  return (
    <div>
        <h1>Tabs</h1>
        <ul className='flex gap-1 text-white'>
            {
                datas.map((item, index) => <li onClick={() => setNum(index)} > { item.title } </li>)
            }
        </ul>
        <div>
            <AnimatePresence>
                <TabContent key={num} content={datas[num].content} />
            </AnimatePresence>
            {/* <motion.li className='content' 
                            initial={{ opacity : 0 }}
                            animate={{ opacity : 1 }}
                            exit={{ opacity : 0 }}
                > { item.content } </motion.li> */}
        </div>
    </div>
    
  )
}

export default Tabs