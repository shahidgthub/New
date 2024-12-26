import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaLongArrowAltRight } from "react-icons/fa";
import experince from "../../../public/images/experince.png"
import people from "../../../public/images/People.png"
import project from "../../../public/images/project.png"
import quotes from "../../../public/images/Quotes.png"
import Rosely from "../../../public/images/Rosely.png"
import Digital from "../../../public/images/Digitalma.png"
import Cloud from "../../../public/images/Cloudser.png"
import logo from '../../../public/images/Logo.png'
import { MdOutlineEmail } from "react-icons/md";
import video from "../../../public/images/video.png"
import Project from './Project'
const About = () => {
  // js
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
        <p className='text-[20px] font-bold pt-12'>About us</p>
        <div className='flex justify-between lg:flex-nowrap flex-wrap'>

        <h1 className='text-[40px] font-bold'>Crafting Digital Legacies</h1>
        <p>Tempor malesuada eget placerat proin turpis ut at tortor<br/> Amet sed bibendum nisl ut nibh at. 
            Praesent porttitor fusce<br/> sed eu dolor enim turpis sociis</p>
            </div>
            <div className='flex gap-12 pt-12 lg:flex-nowrap flex-wrap'>
              <Image src={video} alt="experince" className='w-[820px]'/>
              <div className='bg-black w-[418px] h-[580px]'>
                <div className='pt-12'>
                  <div className='flex items-center justify-center'>
                  <Image src={experince} alt='experince'/>
                  </div>
                  <p className='text-[32px] font-bold text-[#24FD54] text-center'>25</p>
                <p className='text-white text-center'>Year of experince
                  </p>
                
                  </div>
                  <div className='pt-12'>
                  <div className='flex items-center justify-center'>
                  <Image src={people} alt='people'/>
                  </div>
                  <p className='text-[32px] font-bold text-[#24FD54] text-center'>42</p>
                <p className='text-white text-center'>Team of Member
                  </p>
                  </div>
                  <div className='pt-12'>
                  <div className='flex items-center justify-center'>
                  <Image src={project} alt='project'/>
                  </div>
                  <p className='text-[32px] font-bold text-[#24FD54] text-center'>1800</p>
                <p className='text-white text-center'>project done
                  </p>
                  </div>
              </div>
             
            </div>
             {/* team */}
             <p className='font-bold text-[20px] text-center pt-12'>Team</p>
             <p className='font-bold text-center text-[40px]'>Our professional Team</p>
             <div className='bg-black py-6'>
               <div className='pt-4 flex gap-12 py-6 lg:flex-nowrap flex-wrap '>
                 <div>
                 <p className='lg:font-bold text-white px-6 pt-6 '>Tempor malesuada eget placerat proin turpis ut at tortor. Amet sed bibendum nisl ut nibh at. Praesent porttitor fusce sed eu dolor enim turpis sociis.
                    Viverra est ultrices feugiat sociis lacinia pretium in placerat. Ultrices nibh quisque eu orci aliquam enim
 et sapien aliquet. Ac viverra malesuada at arcu metus. Dignissim fames sit bibendum velit imperdiet felis. Maecenas egestas viverra a accumsan maecenas tortor. Est convallis a volutpat enim faucibus congue facilisis hac ultrices.</p>
 
 <div>
 </div>
 </div>
<Image src={quotes} alt='quotes' className='relative right-12 pt-6 w-[140px] h-[93px]'/> 

               </div>
               <div className='flex gap-3  mx-6'>
   <Image src={video}  alt='video'className='w-[40px] h-[40px] rounded-full mt-3'/>
 <p className='text-white'>VonRueden Inc<span className='w-[60px] h-[60px] text-[#24FD54] rounded-full'>.</span>Directives Officer <br/>Marty Collier</p>
 
 </div>
               <div>
                 
               </div>
             </div>
             {/* DigitalAge */}
             <div className='flex gap-24 pt-12 lg:flex-nowrap flex-wrap'>
               <Image src={Rosely} alt='rosely'className='w-[526px] h-[526px]'/>
               <div className='pt-12'>
                 <p className='text-[32px] font-bold text-center'>Empowering Businesses <br/>for the Digital Age</p>
                 <p className='text-center'>Tempor malesuada eget placerat proin turpis ut at tortor. Amet sed bibendum nisl ut nibh at. </p>
               <div className='flex gap-12 pt-6'>
                 <div>
                   <Image src={Digital} alt='digital'/>
                   <h1 className='font-bold py-3'>Digital marketing</h1>
                   <p>Amet in mauris vel enim consequat hac risus. 
                     Nec duis viverra lacus ac et. Gravida ornare eget rhoncus </p>
                 </div>
                 <div>
                 <Image src={Cloud} alt='cloud'/>

                 <h1 className='font-bold py-3'>Cloud services</h1>
                   <p>Urna vel eget viverra massa condimentum elementum quam elit lorem.
                      Mauris aliquam risus ipsum tellus et </p>
                 </div>

               </div>
               </div>
               </div>
               <p className='pt-12 text-[24px] font-bold'>Blog</p>
               <div className="flex justify-between lg:flex-nowrap flex-wrap lg:text-start text-center pt-6">
  
    <p className="text-[32px] font-bold">Our Latest News</p>
    
  
  <button className='border-2 border-black px-6 inline-block font-semibold'>All news </button>
</div>

              <div className='gap-4 flex lg:flex-nowrap flex-wrap pt-6'>
              <div className='bg-[#FFFFFF] w-[413px] py-4'>
                      <Image src={Rosely} alt='Blog' className=' w-[413px] h-[380px]'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2 font-semibold'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54]'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1 className='font-semibold'>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1 w-[24px] h-[24px] '/>
                     </div>
                     </div>
                     {/* 2 */}
                     <div className='bg-[#FFFFFF] w-[413px] py-4'>
                      <Image src={Rosely} alt='Blog' className=' w-[413px] h-[380px]'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2 font-semibold'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54]'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1 className='font-semibold'>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1 w-[24px] h-[24px]'/>
                     </div>
                     </div>
                     {/* 3 */}
                     <div className='bg-[#FFFFFF] w-[413px] py-4'>
                      <Image src={Rosely} alt='Blog' className=' w-[413px] h-[380px]'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2 font-semibold'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54]'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1 className='font-semibold'>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1 w-[24px] h-[24px]'/>
                     </div>
                     </div>



              </div>
              </div>
          {/* Ffooter */}

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
                   
<div className='flex itens-center justify-center gap-6 py-6'>




    
</div>
                   
                   </div>

      </section>
      </>
    
  )
}

export default About