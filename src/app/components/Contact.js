import React from 'react'
import Image from 'next/image'
import rosely from '../../../public/images/Rosely.png'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const Contact = () => {
  return (
      <>
    <div className=' container mx-auto'>
        <div className=' flex gap-12 pt-12 lg:flex-nowrap flex-wrap '>
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
    className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
  >
    Send Message
  </button>
</form>

</div>
<div><Image src={rosely} className='w-[636px]'/></div>
</div>
{/* 3 */}
<div className='flex gap-3 pt-6 lg:flex-nowrap flex-wrap'>
    <div className='bg-black w-[416px] h-[180px] '>
        <p className='font-bold text-center text-white pt-12 text-[20px]'>Address</p>
        <div className='flex items-center justify-center gap-3'>
        <IoLocationSharp  className='w-[40px] h-[40px] text-white'/>
<p className='text-white py-6 font-bold'>7914 Lees Creek<br/> 
St. Dayton, OH 45420</p>
</div>
    </div>
    {/* 2 */}
    <div className='bg-black w-[416px] h-[180px] '>
        <p className='font-bold text-center text-white pt-12 text-[20px]'>Email</p>
        <div className='flex items-center justify-center gap-3'>
        <MdOutlineMail className='w-[40px] h-[40px] text-white'/>
<p className='text-white py-6 font-bold'>dhrakar@msn.com<br/>
mrsam@gmail.com</p>
</div>
    </div>
    {/* 3 */}
    <div className='bg-black w-[416px] h-[180px] '>
        <p className='font-bold text-center text-white pt-12 text-[20px]'>Phone</p>
        <div className='flex items-center justify-center gap-3'>
        <FaPhoneAlt className='w-[40px] h-[40px] text-white'/>
<p className='text-white py-6 font-bold'>(437) 402-2459<br/>
(928) 630-9272
 </p>
</div>
    </div>

</div>
<div class="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26582.934903732472!2d73.14608096881844!3d33.60875873491331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0851d92db3%3A0x66f28b1327836ee2!2sGulberg%20Greens%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1734080407976!5m2!1sen!2s" 
    class="absolute top-0 left-0 w-[1220px] h-[320px] pt-12 border-0" 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>
</div>

    </>
  )
}

export default Contact