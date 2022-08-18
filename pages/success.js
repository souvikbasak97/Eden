import { useRouter } from 'next/router'
import React from 'react'
import Logo from '../components/Logo'
import Scroll from '../components/scroll'
import Image from 'next/image'
const Success = () => {
    const router=useRouter();
    const name=router.query.name;
  return (
    <div>
        <form className='flex flex-col items-center mt-10'>
            <Logo/>
            <Scroll page="4"/>
            <Image className='m-5' src='/success.jpg' height={80} width={80}/>
            <h1 className="font-bold text-3xl mt-10">Congratulations, {name}!</h1>
            <p className='text-gray-500 font-bold mt-10 text-sm'>You have completed onboarding,you can start using the Eden!</p>
            <div className='xl:w-1/4 sm:w-full md:w-1/2' >
                <button className='btn'>Launch Eden</button>
            </div>
        </form>
    </div>
  )
}

export default Success