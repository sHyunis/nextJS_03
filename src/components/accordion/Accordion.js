import React, { useState } from 'react'
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

const Accordion = () => {
  const Variants = {
    height0 : { height : 0 },
    height100 : { height : 100 }
  }

  const [ num, setNum ] = useState(1);
  return (
    <div>
        <h1>Accordion</h1>
        <dl>
            {
                datas.map(item => (
                    <div>
                        <dt onClick={() => setNum(item.id)} >{item.title}</dt>
                        <motion.dd variants={Variants}
                                   initial='height0'
                                   animate={ item.id === num ? 'height100' : 'height0' }
                        >{item.content}</motion.dd>
                    </div>
                ))
            }
        </dl>
    </div>
  )
}

export default Accordion