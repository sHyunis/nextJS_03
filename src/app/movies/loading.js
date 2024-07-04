// src/app/movies/loading.js
import React from 'react'
import LoadingText from '@/components/animatePresence/LoadingText'

const Loading = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
        <LoadingText />
    </div>
  )
}

export default Loading