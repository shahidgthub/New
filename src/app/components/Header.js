import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/Logo.png'
import { MdOutlineEmail } from "react-icons/md";
import Mobilemenu from './Mobilemenu';




const Header = () => {
  return (
      <>
      <nav className='py-6 bg-black border-b border-gray-50'>
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
        <Image src={logo} alt='logo' className='w-[24px] h-[24px] mt-2'/>
        <p className='text-[16px] font-bold mt-2 text-white'>Creative agency</p>
        
    </div>
    <div>
    <Mobilemenu className='xl:hidden  flex' />
       
        <ul className='lg:flex gap-6 -mt-3  hidden'>
          <li><Link href=''className='text-[16px] font-bold text-white'> Home </Link></li>
          <li><Link href='/service' className='text-[16px] font-bold text-white'> Service </Link></li>
          <li><Link href='/about'className='text-[16px] font-bold text-white'> Aboutus </Link></li>
          <li><Link href='/contact'className='text-[16px] font-bold text-white'> Contact </Link></li>
          </ul>
          </div>
          <div className='lg:flex gap-4 hidden '>
            <div className='flex  mt-2 text-white'>
          
          <MdOutlineEmail className=' w-[24px] h-[24px]'  />

          <p className=' text-[16px] font-bold'> dhrakar@msn.com</p>
          </div>
          
          
          <button className='px-4 py-2 border-2 border-[#24FD54] text-[#24FD54] text-[16px] font-bold'>Get a Quote</button>
            </div>
      </div>
     

    </div>
    </nav>
    </>
  )
}

export default Header;