import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/Logo.png'

import rosely from '../../../public/images/Rosely.png'
import digital from '../../../public/images/digitals.jpg'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from './Footer';
import Link from 'next/link'
import { RiFacebookCircleLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import { IoCameraOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";



const Contact = () => {
  return (
      <>
      {/* Header */}
      <nav className='py-6   border-gray-50'>
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
        <Image 
  src={logo} 
  alt='logo' 
  className='w-[24px] h-[24px] mt-2 ' 
  style={{ backgroundColor: 'black' }}
/>

        <p className='text-[16px] font-bold mt-2 '>Creative agency</p>
        
    </div>
    <div>
       
        <ul className='lg:flex gap-6 mt-2  hidden'>
          <li><Link href=''className='text-[16px] font-bold'> Home </Link></li>
          <li><Link href='/service' className='text-[16px] font-bold '> Service </Link></li>
          <li><Link href='/about'className='text-[16px] font-bold '> Aboutus </Link></li>
          <li><Link href='/contact'className='text-[16px] font-bold '> Contact </Link></li>
          </ul>
          </div>
          <div className='lg:flex gap-4 hidden '>
            <div className='flex  mt-2 text-white'>
          
          <MdOutlineEmail className=' w-[24px] h-[24px]'  />

          <p className=' text-[16px] font-bold text-black'> dhrakar@msn.com</p>
          </div>
          
          
          <button className='px-4 py-2 border-2 border-black text-black   text-[16px] font-bold'>Get a Quote</button>
            </div>
      </div>
     

    </div>
    </nav>
      {/* endHeader */}
    <div className=' container mx-auto'>
      <div className=' flex gap-24 pt-12 lg:flex-nowrap flex-wrap '>
        <div>
        <p className='font-bold text-[20px]'>Contact</p>
        <p className='text-[40px] font-bold'>Turning ideas<br/> 
into digital solutions</p>
<form className="space-y-4 pt-6">
    <div className='flex gap-6'>
  <div>
    <label for="name" className="block font-medium">Your Name</label>
    <input 
      type="text" 
      id="name" 
      placeholder="Enter your name" 
      className="border w-full px-3 py-2 rounded"
    />
  </div>
  
  <div>
    <label for="email" className="block font-medium">Your Email</label>
    <input 
      type="email" 
      id="email" 
      placeholder="Enter your email" 
      className="border w-full px-3 py-2 rounded"
    />
  </div>
  </div>
  
  <div>
    <label for="subject" className="block font-medium">Subject</label>
    <input 
      type="text" 
      id="subject" 
      placeholder="Enter subject" 
      className="border w-full px-3 py-2 rounded"
    />
  </div>
  
  <div>
    <label for="message" className="block font-medium">Your Message</label>
    <textarea 
      id="message" 
      placeholder="Write your message" 
      className="border w-full px-3 py-2 rounded h-24 resize-none"
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    className="px-4 py-2 bg-black text-[#24FD54] rounded hover:bg-gray-800"
  >
    Send Message
  </button>
</form>

</div>
<div><Image src={digital} alt='rosely' className='w-[636px] h-[600px] rounded-lg'/></div>
</div>
{/* 3 */}
<div className='flex gap-3 mt-12 lg:flex-nowrap flex-wrap'>
    <div className='bg-black w-[416px] h-[180px] rounded-lg '>
        <p className='font-bold text-center text-white pt-12 text-[20px]'>Address</p>
        <div className='flex items-center justify-center gap-3'>
        <IoLocationSharp  className='w-[40px] h-[40px] text-[#24FD54]'/>
<p className='text-white py-6 font-bold'>7914 Lees Creek<br/> 
St. Dayton, OH 45420</p>
</div>
    </div>
    {/* 2 */}
    <div className='bg-black w-[416px] h-[180px] rounded-lg '>
        <p className='font-bold text-center text-white pt-12 text-[20px]'>Email</p>
        <div className='flex items-center justify-center gap-3'>
        <MdOutlineMail className='w-[40px] h-[40px] text-[#24FD54]'/>
<p className='text-white py-6 font-bold'>dhrakar@msn.com<br/>
mrsam@gmail.com</p>
</div>
    </div>
    {/* 3 */}
    <div className='bg-black w-[416px] h-[180px] rounded-lg'>
        <p className='font-bold text-center text-white pt-12 text-[20px]'>Phone</p>
        <div className='flex items-center justify-center gap-3'>
        <FaPhoneAlt className='w-[40px] h-[40px] text-[#24FD54]'/>
<p className='text-white py-6 font-bold'>(437) 402-2459<br/>
(928) 630-9272
 </p>
</div>
    </div>

</div>
<div className="relative w-full pt-[32%] overflow-hidden rounded-lg mt-12">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26582.934903732472!2d73.14608096881844!3d33.60875873491331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0851d92db3%3A0x66f28b1327836ee2!2sGulberg%20Greens%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1734080407976!5m2!1sen!2s"
    className="absolute top-0 left-0 w-full h-[400px] border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>
<div className="bg-[#000000CC] mt-6 py-12 relative">
  <p className="text-white text-[32px] font-bold text-center pt-6">Where Vision Transforms into Reality</p>
  <p className='text-white text-center py-6'>Velit facilisi senectus velit elementum. Consequat vel arcu feugiat dui eu 
    tempor pretium at porta. Dui pellentesque sagittis scelerisque</p>
    <div className='flex justify-center'>
    <button className='font-bold px-6 py-3 bg-[#24FD54]'>Learn More</button>
    </div>

</div>
{/* Footer */}
<section className='bg-[black] mt-' >
          <div className='container mx-auto'>
              <div className='grid xl:grid-cols-5 md:grid-cols-3 xl:sm:grid-cols-2  sm:grid-cols-1 xl:justify-start justify-center'>
              <div className=''>
                <div className='flex gap-2'>
                <Image src={logo} alt='logo' className='w-[40px] h-[40px] mt-6'/>
              <p className='font-bold text-[20px] text-white py-6'>Creative Agency</p>
              </div>
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
                           <p className='text-[16px] text-[#FFFFFF80] text-center pt-6 border-b-2  border-[#25FD54] py-6'> © Copyright Dev.01  2024. Design by Creative Themes</p>
                   
<div className='flex itens-center justify-center gap-6 py-8'>
<RiFacebookCircleLine 
 className='h-[24px] w-[24px] text-[#FFFFFF]'/>
 <RxCross2 
 className='h-[24px] w-[24px] text-[#FFFFFF]'/>
 <IoCameraOutline className='h-[24px] w-[24px] text-[#FFFFFF] ' />
 <FaYoutube className='h-[24px] w-[24px] text-[#FFFFFF]' />



    
</div>
                   
                   </div>

      </section>


    </>
  )
}

export default Contact