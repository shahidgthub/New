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
import Link from 'next/link'
import logo from '../../../public/images/Logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { Mobile, Webdevelopment } from '../../../public/icon/icons'
import { FaFacebook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";






const Project = () => {
  return (
      <>
      <div className='container mx-auto'>
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
          <h1 className='font-bold text-center'>Service</h1>
          <h2 className='text-[32px] text-center font-bold py-6'>We have solutions for <br/>any problem</h2>
          <div className='flex gap-6 lg:flex-nowrap flex-wrap'>
               <div className='bg-[#FFFFFF] w-[636px] py-6'>
              <Image src={bussiness} alt='bussiness' className='w-[636px] rounded-2xl'/>
              <p className='font-bold border-b-2 border-[#24FD54] py-3'>For Bussiness</p>
              <p className='py-4'>Magnis id rhoncus vitae sit. Arcu massa duis velit in nibh sollicitudin mauris imperdiet posuer</p>
                </div>
            {/* 2 */}<div className='bg-[#FFFFFF] w-[636px] py-6 '>
              <Image src={individual} alt='individual' className='w-[636px] rounded-2xl'/>
              <p className='font-bold border-b-2 border-[#24FD54] py-3'>For Individuall</p>
              <p className='py-4'>Tortor pellentesque elementum volutpat vel gravida nisl vulputate. 
              Ut faucibus gravida pharetra lectus etiam sed purus ornare lacus</p>

                   </div>
              
         </div>
         <section className='bg-black py-12 pt-6'>
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
             <p className='font-bold text-[20px] text-center pt-12'>Projects</p>
             <h1 className='font-bold text-[38px] text-center py-6'> Our Projects</h1>
             <div className='flex gap-6 lg:flex-nowrap flex-wrap'>
             <div>
             <Image src={development} alt='rosely' className='  rounded-xl  lg:w-[400px] md:w-[380px] sm:w-[320px] h-[320px]'/>
             <div className='bg-black lg:w-[400px] md:w-[380px] sm:w-[320px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
               </div>
               <div className=''>
               <Image src={development} alt='rosely' className=' rounded-xl lg:w-[400px] md:w-[380px] sm:w-[320px] h-[320px]'/>
             <div className='bg-black lg:w-[400px] md:w-[380px] sm:w-[320px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
                 
               </div>
               <div className=''>
               <Image src={development} alt='rosely' className='rounded-xl lg:w-[400px] md:w-[380px] sm:w-[320px] h-[320px]'/>
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
                 <Image src={development} alt='rosely' className='xl:w-[613px] h-[500px] rounded-2xl'/>
               <div className='bg-black xl:w-[613px] absolute -mt-12'>
               <div className='flex justify-between py-2 px-2'>
               <p className='text-white text-[20px]'>Web Development</p>
               <p className=' border  border-[#25FD54] text-[#25FD54]  rounded-full inline-block py-2 px-2'>
               <FaArrowRight/></p>
               </div></div>
               </div>
               {/* 2 */}
               <div className='xl:w-[613px]'>
                 <Image src={development} alt='rosely' className=' w-[613px] h-[500px] rounded-2xl'/>
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
              <p className='font-bold xl:text-[40px] text-center py-6'>Follow us on Instagram</p>
              <div className='flex gap-5 lg:flex-nowrap flex-wrap'>
                <Image src={insta}  className='w-[300px] h-[300px] rounded-xl'/>
                <Image src={insta}  className='w-[300px] h-[300px] rounded-xl'/>
                <Image src={insta}  className='w-[300px] h-[300px] rounded-xl'/>
                <Image src={insta}  className='w-[300px] h-[300px] rounded-xl'/>

              </div>

      </div>
      {/* Footer */}
      <section className='bg-[black] mt-12' >
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
                           <p className='text-[16px] text-[#FFFFFF80] text-center pt-4 border-b-2  border-[#25FD54] py-3'> © Copyright Dev.01  2024. Design by Creative Themes</p>
                           <div className='flex items-center justify-center gap-6 py-6'>
                             <FaFacebook className='text-white' />
                             <IoMdClose className='text-white' />
                             <AiFillInstagram className='text-white' />
                                <FaYoutube className='text-white' />
                            </div>

   
                   
                   </div>

      </section>
     

      </>
  )
}

export default Project