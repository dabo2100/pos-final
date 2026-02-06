import React from 'react'
import IdImg from '../assets/SVG.svg'
import PinImg from'../assets/SVG (1).svg'

export default function Forms() {
  return (
     <div className='flex flex-col pt-8 w-87.5 gap-4'>
            <div className='relative'>
            <span className='text-[12px] font-medium text-[#009966] leading-4  p-2'>Staff ID</span>
            <input className='w-full text-[16px] pt-4.25 pr-5 pb-4.5 pl-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] outline-0 shadow  'placeholder='Enter ID' type="text" />
            <img src={IdImg} alt="" srcset=""     className='absolute right-[5%] top-[50%]' />
            </div>
            <div className='relative'>
            <span className='text-[12px] font-medium text-[#009966] leading-4  p-2'>PIN Code</span>
            <input className='w-full text-[24px] text-center tracking-[24px] pt-4.25 pr-5 pb-4.5 pl-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] outline-0 shadow  'placeholder='••••' type="password" />
                        <img src={PinImg} alt="" srcset=""     className='absolute right-[5%] top-[50%]' />

            </div>
          </div>
  )
}
