import React from 'react'

const Pagination = ({length, currentPage, pagePerCount }) => {
    const pageNumbers = []

    for( let a = 1; a <= Math.ceil(length / pagePerCount); a++ ){ // 나머지를 위해 올림 처리함
        pageNumbers.push(a); // 이 안에 페이지 번호가 들어가 있다.
    }
    
  return (
    <div>
        {
            pageNumbers.map((item, index) => <li key={item}>{item}</li>)
        }
    </div>
  )
}

export default Pagination