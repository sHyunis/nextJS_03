'use client'

import React from 'react'
import Link from 'next/link'

const Navbars = () => {

    const menus = [
        {
            id: 1,
            path: '/',
            title: 'Home'
        },
        {
            id: 2,
            path: '/movies',
            title: 'Movies'
        },
        {
            id: 3,
            path: '/coins',
            title: 'Coins'
        }
    ]
  return (
    <div>
        {
            menus.map(menu => <Link href={`${menu.path}`} key={menu.title} > {menu.title} </Link>) // 메뉴 만들기
        }
    </div>
  )
}

export default Navbars