import React,{useState} from 'react'
import Logo from '../components/Logo'
import Scroll from '../components/scroll'
import {FaUser} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import  Router, {useRouter } from 'next/router'
const config = () => {
  const [state,setState]=useState(1);
  const router=useRouter();
  const createAccount=(e)=>{
    e.preventDefault();
    const name=router.query.name;
    Router.push(`/success?name=${name}`);
  }
  return (
    <div className='h-screen items-center'>
        <form className='flex flex-col items-center mt-10'>
          <Logo/>
          <Scroll page="3"/>
          <p className='text-3xl font-bold flex flex-grow m-3'>How are you planning to use Eden?</p>
          <p className='text-gray-500 text-sm mt-2 mb-5 text-center'>We'll streamline your setup experience accordingly</p>
          <div className='xl:w-1/4 sm:w-full md:w-1/2' >
            <div className='flex flex-grow'>
            <div className={'border-solid border-2 rounded-md shadow-lg h-40 w-5/12 p-5 m-3 hover:cursor-pointer '+
            (state===1?'border-[#664DE5]':'border-gray-400')} onClick={()=>setState(1)}>
              <FaUser size={25}/>
              <p className='text-l font-bold'>For Myself</p>
              <p className='text-gray-500 text-sm'>Write better.Think more clearly.Stay organized.</p>
            </div>
            <div className={'border-solid border-2 rounded-md shadow-lg h-40 w-5/12 p-4 m-3 hover:cursor-pointer '+(state===2?'border-[#664DE5]':'border-gray-400')} onClick={()=>setState(2)}>
              <MdGroups size={30}/>
              <p className='text-l font-bold'>With my team</p>
              <p className='text-gray-500 text-sm'>Wikis,docs,tasks &amp; projects, all in one place.</p>
            </div>
            </div>
            <button className='btn' onClick={createAccount}>Create Workspace</button>
          </div>
          
        </form>
        
        
        
    </div>
  )
}

export default config