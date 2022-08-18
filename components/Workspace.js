import React from 'react'
import Scroll from './scroll'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useRef } from 'react'
import Logo from './Logo'
const Workspace = () => {
    const inpref=useRef(null);
    const router=useRouter();
    const createWorkspace = (e) =>{
        e.preventDefault();
        if(!inpref.current.value)
            return;
        const name=router.query.name;
        Router.push(`/config?name=${name}`);
    }
  return (
    <div>
        <form className='flex flex-col items-center mt-10'>
          <Logo/>
          <Scroll page="2"/>
          <p className='text-3xl font-bold flex flex-grow m-3'>Let&apos;s set up a home for all your work</p>
          <p className='text-gray-500 text-sm mt-2 mb-5 text-center'>You can always create another workspace later.</p>
          <div className='xl:w-1/4 sm:w-full md:w-1/2'>
            <p className='text-gray-500 font-bold mt-10 text-sm'>Workspace Name</p>
            <input placeholder='Eden' className='focus:outline-none w-full mt-3 hover:shadow-lg px-3 rounded-md border border-gray-200 py-2 focus-within:shadow-lg' ref={inpref}/>
            <p className='text-gray-500 font-bold mt-10 text-sm'>Workspace URL <span className='text-gray-300'>(optional)</span></p>
            <div className='flex flex-grow'>
                <input className='bg-gray-200 focus:outline-none mt-3 hover:shadow-lg px-3 rounded-l-md border border-gray-200 py-2 focus-within:shadow-lg w-1/2 text-xs' disabled placeholder='www.eden.com/'/>
                <input className='focus:outline-none w-full mt-3 hover:shadow-lg px-3 rounded-r-md border border-gray-200 py-2 focus-within:shadow-lg' placeholder='Example'/>
            </div>
            <button className='btn' onClick={createWorkspace}>Create Workspace</button>
          </div>
        </form>
    </div>
  )
}

export default Workspace