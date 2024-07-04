import React, { useState } from 'react'
import './Tabs.css'
import { motion } from 'framer-motion'

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

const Tabs = () => {
  const [ num, setNum ] = useState(0);
  return (
    <div>
        <h1>Tabs</h1>
        <ul>
            {
                datas.map(item => <li onClick={() => setNum(item.id)} > { item.title } </li>)
            }
        </ul>
        <div>
            {
                // datas.map(item => <motion.li className={item.id === num ? 'content active' : 'content' } <-- framer motion 안 썼을 때 코드 
                datas.map(item => <motion.li className='content' 
                                      initial={{ opacity : 0 }}
                                      animate={{ opacity : item.id === num ? 1 : 0 }}
                > { item.content } </motion.li>)
            }
        </div>
    </div>
    
  )
}

export default Tabs