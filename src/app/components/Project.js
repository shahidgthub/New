import React from 'react'
import Image from 'next/image'
import bussiness from '../../../public/images/Bussiness.jpg'
import individual from '../../../public/images/individual.jpg'
import development from '../../../public/images/Webdevelopment.jpg'
import insta from '../../../public/images/instagram.jpg'



import blog from '../../../public/images/Blog1.png'
import Rosely from '../../../public/images/Rosely.png'
import { FaArrowRight } from "react-icons/fa";
import Web from '../../../public/images/Web1.png'
import Mob from '../../../public/images/Mob.png'
import Soft from '../../../public/images/Soft.png'
import Brand from '../../../public/images/Brand2.png'
import Digital from '../../../public/images/Digital.png'
import Cloud from '../../../public/images/Cloud.png'








import { Mobile, Webdevelopment } from '../../../public/icon/icons'
import Header from './Header';

const Project = () => {
  return (
      <>
      <div className='container mx-auto'>
          <h1 className='font-bold text-center'>Service</h1>
          <h2 className='text-[32px] text-center font-bold'>We have solutions for <br/>any problem</h2>
          <div className='flex gap-6 lg:flex-nowrap flex-wrap'>
               <div className='bg-[#FFFFFF] w-[636px]'>
              <Image src={bussiness} className='w-[636px]'/>
              <p className='font-bold border-b-2 border-[#24FD54] py-3'>For Bussiness</p>
              <p className='py-4'>Magnis id rhoncus vitae sit. Arcu massa duis velit in nibh sollicitudin mauris imperdiet posuer</p>
                </div>
            {/* 2 */}<div className='bg-[#FFFFFF] w-[636px]'>
              <Image src={individual} className='w-[636px]'/>
              <p className='font-bold border-b-2 border-[#24FD54] py-3'>For Individuall</p>
              <p className='py-4'>Tortor pellentesque elementum volutpat vel gravida nisl vulputate. 
              Ut faucibus gravida pharetra lectus etiam sed purus ornare lacus</p>

                   </div>
              
         </div>
         <section className='bg-black py-12'>
           <h1 className='text-[#25FD54] text-center text-[26px] pt-12'>we offer</h1>
           <p className='text-white text-center text-[36px]' >We offer a wide array of services</p>
           <div className='flex gap-4 lg:flex-nowrap flex-wrap'>
             {/* 1 */}
             <div className='w-[412px]   py-6'>
               <div className='px-6 pt-6'>
                 <Image src={Web} alt='web'/>
               <h1 className='text-[20px] font-bold text-white py-6'>Web Development</h1>
               <p className='text-white'>Non tristique et nec nibh nisl aliquet et amet posuere.
                Vel nunc aliquam magna lacinia nulla risus. </p>
                <p className='underline text-[#25FD54] pt-6'>Learn more</p>
                </div>

             </div>
             {/* 2 */}
             <div className='w-[412px]  py-6'>
             <div className='px-6 pt-6'>
             <Image src={Mob} alt='mob'/>
               <h1 className='text-[20px] font-bold text-white py-6'>Mobile Development</h1>
               <p className='text-white'>Dictum ut volutpat duis faucibus mauris nec. At quam molestie hendrerit nulla.
                Donec sed sem ac massa turpis luctus  </p>
                <p className='underline text-[#25FD54] pt-6'>Learn more</p>
                </div>
             </div>
             {/* 3 */}
             <div className='w-[412px]  py-6'>
             <div className='px-6 pt-6'>
             <Image src={Soft} alt='soft'/>
               <h1 className='text-[20px] font-bold text-white py-6'>Software Development</h1>
               <p className='text-white'>Amet in mauris vel enim consequat hac risus. 
               Nec duis viverra lacus ac et. Gravida ornare eget rhoncus  </p>
                <p className='underline text-[#25FD54] pt-6'>Learn more</p>
                </div>
             </div>
             </div>
             {/* newd3 */}
             {/* 1 */}
             <div className='flex gap-4 pt-6 lg:flex-nowrap flex-wrap'>
               <div className='w-[412px]  py-6'>
               <div className='px-6 pt-6'>
               <Image src={Brand} alt='brand'/>
               <h1 className='text-[20px] font-bold text-white py-6'>Branding</h1>
               <p className='text-white'>Non tristique et nec nibh nisl aliquet et amet posuere.
                Vel nunc aliquam magna lacinia nulla risus.   </p>
                <p className='underline text-[#25FD54] pt-3'>Learn more</p>
                </div>
               </div>
               {/* 2 */}
               <div className='w-[412px]  py-6'>
               <div className='px-6 pt-6'>
               <Image src={Digital} alt='digital'/>

               <h1 className='text-[20px] font-bold text-white py-6'>Digital marketing</h1>
               <p className='text-white'>Amet in mauris vel enim consequat hac risus. Nec duis viverra lacus ac et.
                Gravida ornare eget rhoncus  </p>
                <p className='underline text-[#25FD54] pt-6'>Learn more</p>
                </div>
               </div>
               {/* 3 */}
               <div className='w-[412px]  py-6'>
               <div className='px-6 pt-6'>
               <Image src={Cloud} alt='cloud'/>
               <h1 className='text-[20px] font-bold text-white py-6'>Cloud Services</h1>
               <p className='text-white'>Dictum ut volutpat duis faucibus mauris nec. At quam molestie hendrerit nulla.
                Donec sed sem ac massa turpis luctus   </p>
                <p className='underline text-[#25FD54] pt-6'>Learn more</p>
                </div>
               </div>


             </div>
             </section>
             {/* project */}
             <p className='font-bold text-[20px] text-center'>Projects</p>
             <h1 className='font-bold text-[38px] text-center'> Our Projects</h1>
             <div className='flex gap-6 lg:flex-nowrap flex-wrap'>
             <div>
             <Image src={development} alt='rosely' className=' xl:w-[411px] lg:w-[400px] md:w-[380px] sm:w-[320px] h-[320px]'/>
             <div className='bg-black lg:w-[400px] md:w-[380px] sm:w-[320px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
               </div>
               <div className=''>
               <Image src={development} alt='rosely' className=' lg:w-[400px] md:w-[380px] sm:w-[320px] h-[320px]'/>
             <div className='bg-black lg:w-[400px] md:w-[380px] sm:w-[320px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
                 
               </div>
               <div className=''>
               <Image src={development} alt='rosely' className=' lg:w-[400px] md:w-[380px] sm:w-[320px] h-[320px]'/>
             <div className='bg-black lg:w-[400px] md:w-[380px] sm:w-[320px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
               </div>
               </div>
               <div className='flex pt-6 gap-12 lg:flex-nowrap flex-wrap'>
                 <div className='xl:w-[613px]'>
                 <Image src={development} alt='rosely' className='xl:w-[613px] h-[500px]'/>
               <div className='bg-black xl:w-[613px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
               </div>
               {/* 2 */}
               <div className='xl:w-[613px]'>
                 <Image src={development} alt='rosely' className=' w-[613px] h-[500px]'/>
               <div className='bg-black xl:w-[613px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
               </div>
               </div>
               <div className='bg-black xl:w-[1280px] lg:w-[1024px] md:w-[700px] xl:sm:w-[420px] sm:w-[320px] h-[300px] mt-12'>
               <div className='relative pt-12'>
               <div className="bg-bground w-[200px] h-[200px] absolute right-24"></div>
               <h1 className='text-center text-white text-[32px]'>Let’s Work together</h1>
               <p className='text-white text-center xl:py-6 py-2'>
               Accumsan at facilisis mauris tellus diam. Tempor malesuada eget placerat proin turpis ut at tortor. Amet sed bibendum<br/> nisl ut nibh at.
                Praesent porttitor fusce sed eu dolor enim turpis sociis. 
               </p>
               <div className='text-center'>
               <button className='font-bold text-[20px] bg-[#25FD54] px-4 py-2'>Get in touch</button>
               </div>
              </div>
              </div>
              <p className='font-bold text-[20px] text-center pt-12'>Instargam</p>
              <p className='font-bold xl:text-[40px] text-center'>Follow us on Instagram</p>
              <div className='flex gap-5 lg:flex-nowrap flex-wrap'>
                <Image src={insta}  className='w-[300px] h-[300px]'/>
                <Image src={insta}  className='w-[300px] h-[300px]'/>
                <Image src={insta}  className='w-[300px] h-[300px]'/>
                <Image src={insta}  className='w-[300px] h-[300px]'/>

              </div>

      </div>

      </>
  )
}

export default Project