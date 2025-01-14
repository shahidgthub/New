import React from 'react'
import Image from 'next/image'
import device from '../../../public/images/Device.png'
import iphone from '../../../public/images/iphone.png'
import Blog from '../../../public/images/Blog1.png'
import microsoft2 from '../../../public/images/microsoft (2).png'
import hp from '../../../public/images/hp.png'
import intel from '../../../public/images/intel.png'
import adobe from '../../../public/images/adobe.png'
import google from '../../../public/images/google2.png'



import { FaLongArrowAltRight } from "react-icons/fa";






const Software = () => {
  return (
      <>
      <section className='bg-black mt-12'>

          <div className=' container mx-auto'>
              <div className='flex gap-12 lg:flexnowrap flex-wrap lg:text-start text-center'>
              <div className='xl:py-24'>
              <p className='text-[16px] font-bold text-[#25FD54] py-6'>Software</p>
              <p className='text-[32px] text-white py-6'>Building the future,<br/> one line of code at<br/> 
a time.</p>
<p className='text-white '>Condimentum pellentesque scelerisque ac odio metus commodo.
     Enim pharetra<br/> at eget auctor volutpat lorem lacus massa elit. </p>
     <button className='font-bold px-6 bg-[#25FD54] py-2 mt-6'>Learn more</button>
     </div>
     <div className='py-24 mx-12'><Image src={device} alt='device' className='w-[550px]'/></div>
     </div>
     {/* 2 */}
     <div className='flex gap-12 lg:flex-nowrap flex-wrap'>
         <div><Image src={iphone} alt='iphone' className=''/></div>
         <div className=' py-24  xl:px-24'>
             <p className='text-[16px] font-bold text-[#25FD54] text-center'>Mobile App</p>
             <p className='text-[32px] font-bold text-white text-center py-6'>Making applications<br/> that change lives</p>
             <p className='text-white text-center py-6'>Condimentum pellentesque scelerisque ac odio metus commodo. Enim pharetra
                  <br/>at eget auctor volutpat lorem lacus massa elit. </p>
                  <span className='flex items-center justify-center py-6'>
                  <button className='font-bold px-6 py-2 bg-[#25FD54] '>view all</button>
                  </span>
 </div>

     </div>
    </div>
      </section>
      {/* 2sec */}
      <section className='bg-[#FFFFFF] relative -mt-10'>
          <div className='container mx-auto'>
              <p className='font-bold text-[24px] py-6'>Blog</p>
              <div className='flex justify-between lg:flex-nowrap flex-wrap lg:text-start text-center'>
              <p className='text-[32px] font-bold'>Our Latest News</p>
              <button className='px-6 py-2 border-2 border-black font-bold'>All news</button>
              </div>
              <div className='flex gap-4 py-12 lg:flex-nowarp flex-wrap'>
                  <div className='bg-[#FFFFFF] w-[400px] py-4'>
                      <Image src={Blog} alt='Blog' className='rounded-xl'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2 font-semibold'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54] hover:text-white'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1 className='text-[16px] font-semibold'>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1 w-[20px] h-[20px]'/>
                     </div>
                     </div>
                     {/* 2 */}
                     <div className='bg-[#FFFFFF] w-[400px] py-4'>
                      <Image src={Blog} alt='Blog' className='rounded-xl'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2 font-semibold'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54] hover:text-white'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1 className='text-[16px] font-semibold'>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1 w-[20px] h-[20px]'/>
                     </div>
                     </div>
                     {/* 3 */}
                     <div className='bg-[#FFFFFF] w-[400px] py-4'>
                      <Image src={Blog} alt='Blog' className='rounded-xl'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2 font-semibold'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54] hover:text-white'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1 className='text-[16px] font-semibold'>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1 w-[20px] h-[20px]'/>
                     </div>
                     </div>
                    
                     
              </div>
              <div className='pt-12 px-24 flex xl:gap-32  gap-12 '>
              <Image src={microsoft2} alt='microsoft' className='w-[]'/>
              <Image src={hp} alt='hp' className='w-[]'/>
              <Image src={intel} alt='hp' className='w-[]'/>
              <Image src={adobe} alt='hp' className='w-[]'/>
              <Image src={google} alt='hp' className='w-[]'/>
              </div>
          </div>
      </section>
      </>

      
    
  )
}

export default Software