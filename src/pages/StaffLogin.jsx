import React from 'react'
import stafflogo from '../assets/Background+Shadow-staff.svg'
import Forms from '../componenets/FormStaffLogin'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FiDelete } from 'react-icons/fi'
import { MdOutlineDoneOutline } from 'react-icons/md'
import { TbPointFilled } from 'react-icons/tb'

export default function StaffLogin() {
  return (
    <div className='bg-[#F8FAFC] min-h-screen w-full flex justify-center   flex-col items-center'>
      <div className='w-120 bg-white px-6 flex flex-col gap-8 items-center rounded-3xl border border-[#E2E8F099]'>
        
        {/* Header */}
        <div className='flex flex-col items-center pt-8.5 gap-2'>
          <img src={stafflogo} alt="Staff Logo" />
          <h1 className='font-Outfit font-normal text-[#0F172B] text-[30px]'>
            Staff Access
          </h1>
          <p className='text-[#62748E] text-center'>
            Welcome back, enter your credentials
          </p>
        </div>

        {/* Form Component */}
        <Forms/>

        {/* Numeric Buttons */}
   <div className='grid grid-cols-3 gap-4  pb-6'>
  {Array.from({ length: 9 }).map((_, i) => (
    <button
      key={i}
      className='w-27 h-16 bg-[#F8FAFC] border border-[#E2E8F0] shadow rounded-xl cursor-pointer'
    >
      {i + 1}
    </button>
  ))}
  {/* خلايا فارغة قبل الرقم 0 */}
  <button className='w-27 h-16 bg-[#F8FAFC] border border-[#E2E8F0] shadow rounded-xl flex justify-center items-center cursor-pointer'>
<FiDelete />

  </button>
  <button className='w-27 h-16 bg-[#F8FAFC] border border-[#E2E8F0] shadow rounded-xl cursor-pointer'>
    0
  </button>
  <button className='w-27 h-16 bg-[#F8FAFC] border border-[#E2E8F0] shadow rounded-xl flex justify-center items-center text-green-500 cursor-pointer'>
    <MdOutlineDoneOutline />

  </button>
</div>
<button className='w-87.5    bg-linear-to-r from-[#059669] to-[#10B981] text-amber-50 h-15 rounded-xl cursor-pointer'>Sign In</button>
<p className='text-[14px] text-[#62748E] pb-10'>Forgot PIN? Contact Admin</p>
      </div>
      <div className='flex items-center pt-8'>
      <TbPointFilled  className='text-green-600 text-3xl pr-2 '/>
      <span className=' font-medium text-[#90A1B9] leading-[1.2px]'>System Secure & Live</span>
      </div>
<div className="bg-[#10B981] rounded-full absolute top-0 left-0 w-25 h-25 blur-[120px]" />
      <div className="bg-[#F59E0B] rounded-full absolute bottom-0 right-0 w-25 h-25 blur-[120px]" />

    </div>
  )
}
