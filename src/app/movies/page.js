'use client'
import Pagination from '@/components/pagination/Pagination';
import React, { useState, useEffect } from 'react'

// localhost:3000/movies
const Movies = async () => {

  const [ movies, setMovies ] = useState(0);

  useEffect(() => {
    const loadMovie = async () => {
      const res = await fetch('https://yts.mx/api/v2/list_movies.json')
      const datas = await res.json()
      setMovies(datas)
    }
    loadMovie();
  }, [])

  return (
    <div>
      { movies.length && movies[0].title }
      <Pagination currentPage={1}
                  pagePerCount={5}
                  length={13}
                  // length={30}
                  // length={32}
      />
    </div>
  )
}

export default Movies


// currentPage : 화면에 보여질 페이지 번호
// pagePerCount : 한 화면에 몇 개씩 보여줄까?
// lastOfIndex : currentPage * pagePerCount
// startOfIndex : lastOfIndex - pagePerCount