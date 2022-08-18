import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='flex flex-grow items-left'>
        <Image src='/logo.jpg' alt="Logo" width={50} height={60}/>
        <p className="h-1 font-bold text-4xl mt-3">Eden</p>
    </div>
  )
}

export default Logo