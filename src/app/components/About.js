import React from 'react'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";
import experince from "../../../public/images/experince.png"
import people from "../../../public/images/People.png"
import project from "../../../public/images/project.png"
import quotes from "../../../public/images/Quotes.png"
import Rosely from "../../../public/images/Rosely.png"
import Digital from "../../../public/images/Digitalma.png"
import Cloud from "../../../public/images/Cloudser.png"







import video from "../../../public/images/video.png"
import Project from './Project'
const About = () => {
  // js
  return (
    <div className='container mx-auto'>
        <p className='text-[20px] font-bold pt-12'>About us</p>
        <div className='flex justify-between'>

        <h1 className='text-[40px] font-bold'>Crafting Digital Legacies</h1>
        <p>Tempor malesuada eget placerat proin turpis ut at tortor<br/> Amet sed bibendum nisl ut nibh at. 
            Praesent porttitor fusce<br/> sed eu dolor enim turpis sociis</p>
            </div>
            <div className='flex gap-12 pt-12 lg:flex-nowrap flex-wrap'>
              <Image src={video} className='w-[720px]'/>
              <div className='bg-black w-[418px] h-[580px]'>
                <div className='pt-12'>
                  <div className='flex items-center justify-center'>
                  <Image src={experince}/>
                  </div>
                  <p className='text-[32px] font-bold text-[#24FD54] text-center'>25</p>
                <p className='text-white text-center'>Year of experince
                  </p>
                
                  </div>
                  <div className='pt-12'>
                  <div className='flex items-center justify-center'>
                  <Image src={people}/>
                  </div>
                  <p className='text-[32px] font-bold text-[#24FD54] text-center'>42</p>
                <p className='text-white text-center'>Team of Member
                  </p>
                  </div>
                  <div className='pt-12'>
                  <div className='flex items-center justify-center'>
                  <Image src={project}/>
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
             <div className='bg-black'>
               <div className='pt-4 flex gap-12 py-6'>
                 <div>
                 <p className='font-bold text-white px-6 pt-6 '>Tempor malesuada eget placerat proin turpis ut at tortor. Amet sed bibendum nisl ut nibh at. Praesent porttitor fusce sed eu dolor enim turpis sociis.
                    Viverra est ultrices feugiat sociis lacinia pretium in placerat. Ultrices nibh quisque eu orci aliquam enim
 et sapien aliquet. Ac viverra malesuada at arcu metus. Dignissim fames sit bibendum velit imperdiet felis. Maecenas egestas viverra a accumsan maecenas tortor. Est convallis a volutpat enim faucibus congue facilisis hac ultrices.</p>
 
 <div className='flex gap-3 pt-6 mx-6'>
   <Image src={video} className='w-[40px] h-[40px] rounded-full mt-3'/>
 <p className='text-white'>VonRueden Inc<span className='text-[30px] text-[#24FD54] rounded-full'>.</span>Directives Officer <br/>Marty Collier</p>
 
 </div>

 <div>
 </div>
 </div>
<Image src={quotes} className='relative right-12 pt-6 w-[140px] h-[93px]'/> 
               </div>
               <div>
                 
               </div>
             </div>
             {/* DigitalAge */}
             <div className='flex gap-24 pt-12'>
               <Image src={Rosely} className='w-[526px] h-[526px]'/>
               <div className='pt-12'>
                 <p className='text-[32px] font-bold'>Empowering Businesses <br/>for the Digital Age</p>
                 <p>Tempor malesuada eget placerat proin turpis ut at tortor. Amet sed bibendum nisl ut nibh at. </p>
               <div className='flex gap-12 pt-6'>
                 <div>
                   <Image src={Digital}/>
                   <h1 className='font-bold py-3'>Digital marketing</h1>
                   <p>Amet in mauris vel enim consequat hac risus. 
                     Nec duis viverra lacus ac et. Gravida ornare eget rhoncus </p>
                 </div>
                 <div>
                 <Image src={Cloud}/>

                 <h1 className='font-bold py-3'>Cloud services</h1>
                   <p>Urna vel eget viverra massa condimentum elementum quam elit lorem.
                      Mauris aliquam risus ipsum tellus et </p>
                 </div>

               </div>
               </div>
               </div>
               <div className="flex justify-between lg:flex-nowrap flex-wrap lg:text-start text-center pt-6">
  <div>
    <p>Blog</p>
    <p className="text-[32px] font-bold">Our Latest News</p>
  </div>
  <button className='border px-6'>All news</button>
</div>

              <div className='gap-4 flex'>
              <div className='bg-[#FFFFFF] w-[413px] py-4'>
                      <Image src={Rosely} alt='Blog' className=' w-[413px] h-[380px]'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54]'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1'/>
                     </div>
                     </div>
                     {/* 2 */}
                     <div className='bg-[#FFFFFF] w-[413px] py-4'>
                      <Image src={Rosely} alt='Blog' className=' w-[413px] h-[380px]'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54]'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1'/>
                     </div>
                     </div>
                     {/* 3 */}
                     <div className='bg-[#FFFFFF] w-[413px] py-4'>
                      <Image src={Rosely} alt='Blog' className=' w-[413px] h-[380px]'/>
                      <div className='flex justify-between py-3 px-2'>
                      <p className='text-[#00000099] mt-2'>March 12, 2024 </p>
                      <p className='px-6 py-2 bg-[black] text-[#25FD54]'>Development</p>
                      </div>
                      <p className='font-bold text-[20px]'>Eu amettristique nibhsit porttitor ipsum nullam velit</p>
                      <div className='flex gap-4 text-[#25FD54] pt-3'>
                      <h1>Reed more</h1>
                      <FaLongArrowAltRight className='mt-1'/>
                     </div>
                     </div>



              </div>

    </div>
  )
}

export default About