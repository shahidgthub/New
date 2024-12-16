import React from 'react'
import Link from 'next/link'
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";



const Footer = () => {
  return (
      <>
      <section className='bg-[black] mt-12' >
          <div className='container mx-auto'>
              <div className='grid xl:grid-cols-5 md:grid-cols-3 xl:sm:grid-cols-2  sm:grid-cols-1 xl:justify-start justify-center'>
              <div className=''>
              <p className='font-bold text-[20px] text-white py-6'>Creative Agency</p>
              <p className='text-white'>Velit facilisi senectus velitelementum. 
                  Consequat vel arcu feugiat dui eu tempor pretium at porta.
                   Dui pellentesque sagittis scelerisque</p></div>
                   <div className='text-white lg:flex hidden'></div>
                   <div className='text-white pt-6 space-y-4'>
                       <h1 className='text-[20px] font-bold'>Copmany</h1>
                       <p>Team</p>
                       <p>Careers</p>
                       <p>Partner</p>
                       <p>Review</p>
                       <p>Award</p>
                   </div>
                   
                   <div className='text-white pt-6 space-y-4'>
                       <h1 className='text-[20px] font-bold'>Service</h1>
                       <p>Web Development</p>
                       <p>Mobile Development</p>
                       <p>Sotware Development</p>
                       <p>IT Consulting</p>
                       <p>Cyber Security</p>
                   </div>
            
                   <div className='text-white pt-6 space-y-4'>
                   <h1 className='text-[20px] font-bold'>Useful links</h1>
                       <p>F.A.Q</p>
                       <p>Mobile Development</p>
                       <p>Term Condiation</p>
                       <p>privacy policy</p>
                   </div>
                   </div>
                   
                       <ul className='flex lg:gap-12 gap-4 text-white justify-center pt-24'>
                           <li><Link href='' className='text-[16px]'>Home</Link></li>
                           <li><Link href='' className='text-[16px]'>About</Link></li>
                           <li><Link href='' className='text-[16px]'>Service</Link></li>
                           <li><Link href='' className='text-[16px]'>Blog</Link></li>

                           <li><Link href='' className='text-[16px]'>Contact</Link></li></ul>
                           <p className='text-[16px] text-[#FFFFFF80] text-center pt-4 border-b-2  border-[#25FD54] py-3'> © Copyright Dev.01  2024. Design by Creative Themes</p>
                   
<div className='flex itens-center justify-center gap-6 py-6'>
<RiFacebookCircleLine 
 className='h-[24px] w-[24px] text-[#FFFFFF] '/>
 <IoCameraOutline className='h-[24px] w-[24px] text-[#FFFFFF] ' />
 <FaYoutube className='h-[24px] w-[24px] text-[#FFFFFF]' />



    
</div>
                   
                   </div>

      </section>
    </>
  )
}

export default Footer