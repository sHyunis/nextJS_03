// src/app/loading.js
import React from 'react'
import LoadingCircle from '@/components/animatePresence/LoadingCircle'

const Loading = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        <LoadingCircle />
    </div>
  )
}

export default Loading