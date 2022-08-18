import React,{useState} from 'react'
import { useRouter } from 'next/router';
const Scroll = ({page}) => {
  return (
    <div className='relative flex justify-between items-center xl:w-1/3 sm:w-full md:w-1/2 mt-4 mb-4'>
      <div className="flex m-0 justify-between">
        <div className={'rounded-full h-10 w-10 bg-[#664DE5] text-white'}>
          <p className='text-center p-2'>1</p>
        </div>
      </div>
      <div className={'border-t-2 border-solid transition duration-500 ease-in-out m-0 '+(page>1?'w-full border-[#664DE5]':'w-1/2')}/>

      <div className="flex m-0 justify-between">
        <div className={'rounded-full h-10 w-10 '+(page>=2?' bg-[#664DE5] text-white':'text-gray-500 border-2')}>
          <p className='text-center p-2'>2</p>
        </div>
      </div>
      <div className={'border-t-2 border-solid transition duration-500 ease-in-out m-0 '+(page>2?'w-full border-[#664DE5]':'w-1/2')}></div>
      <div className="flex m-0 justify-between">
        <div className={'rounded-full h-10 w-10 '+(page>=3?' bg-[#664DE5] text-white':'text-gray-500 border-2')}>
          <p className='text-center p-2'>3</p>
        </div>
      </div>
      <div className={'border-t-2 border-solid transition duration-500 ease-in-out m-0 '+(page>3?'w-full border-[#664DE5]':'w-1/2')}></div>
      <div className="flex m-0 justify-between">
        <div className={'rounded-full h-10 w-10 '+(page>=4?' bg-[#664DE5] text-white':'text-gray-500 border-2')}>
          <p className='text-center p-2'>4</p>
        </div>
      </div>
    </div>
  )
}

export default Scroll