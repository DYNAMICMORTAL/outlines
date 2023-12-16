import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link href={"/"}><img src='/home.png' alt='home'/></Link>
        <Link href={"/agent"}><img src='/graph.png' alt='graph'/></Link>
        <Link href={"/manager"}><img src="/grid.png" alt='grid'/></Link>
      </div>
  )
}
