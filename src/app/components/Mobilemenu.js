import React from 'react'
import { IoMenu } from "react-icons/io5";
import Link from 'next/link';
import { MdOutlineEmail } from "react-icons/md";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Mobilemenu = () => {
  return (
    <div>
        <Sheet className=''>
  <SheetTrigger><IoMenu className='lg:hidden flex text-white mt-3'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <ul className='flex-col space-y-2'>
          <li><Link href='' className='text-[16px] font-bold '> Home </Link></li>
          <li><Link href='/service' className='text-[16px] font-bold '> Service </Link></li>
          <li><Link href='/about'className='text-[16px] font-bold '> Aboutus </Link></li>
          <li><Link href='/contact'className='text-[16px] font-bold '> Contact </Link></li>
          </ul>
          <div className='flex-col  space-y-2'>
            <div className='flex  mt-2'>
          
          <MdOutlineEmail className=' w-[24px] h-[24px]'  />

          <p className=' text-[16px] font-bold'> dhrakar@msn.com</p>
          </div>
          
          
          <button className='px-4 py-2 border-2 border-[#24FD54] text-[#24FD54] text-[16px] font-bold'>Get a Quote</button>
            </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default Mobilemenu