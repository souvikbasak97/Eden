import React from 'react'
import { useRef } from 'react'

import Router from 'next/router'
const Welcome = () => {
    const inputRef=useRef(null);
    const create=(e)=>{
        e.preventDefault();
        console.log(inputRef);
        if(!inputRef.current.value) return;
        const name=inputRef.current.value;
        Router.push(`/create?name=${name}`);
    }
  return (
    <div className='mt-3 flex-grow'>
        <h1 className="font-bold text-3xl">Welcome! First things first...</h1>
        <p className='text-gray-500 text-center m-3'>You can always change them later.</p>
        <p className='text-gray-500 font-bold mt-10'>Full Name</p>
        <input type="text" placeholder='Steve Jobs' className='focus:outline-none w-full mt-3 hover:shadow-lg px-3 rounded-md border border-gray-200 py-2 focus-within:shadow-lg' />
        <p className='text-gray-500 font-bold mt-5'>Display Name</p>
        <input type="text" placeholder='Steve' className='focus:outline-none w-full mt-3 hover:shadow-lg px-3 rounded-md border border-gray-200 py-2 focus-within:shadow-lg' ref={inputRef} />
        <button className='btn' onClick={create}>Create Workspace</button>
    </div>

  )
}

export default Welcome