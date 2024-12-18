import React from 'react'
import Image from 'next/image'
import video from "../../../public/images/video.png"
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
                  <p className='text-[32px] font-bold text-white text-center'>25</p>
                <p className='text-white text-center'>Year of experince
                  </p>
                
                  </div>
                  <div className='pt-12'>
                  <p className='text-[32px] font-bold text-white text-center'>42</p>
                <p className='text-white text-center'>Team of Member
                  </p>
                  </div>
                  <div className='pt-12'>
                  <p className='text-[32px] font-bold text-white text-center'>1800</p>
                <p className='text-white text-center'>project done
                  </p>
                  </div>
              </div>
             
            </div>
             {/* team */}
             <p className='font-bold text-[20px] text-center pt-12'>Team</p>
             <p className='font-bold text-center text-[40px]'>Our professional Team</p>
             <div className='bg-black'>
               <div className='pt-4 flex justify-between'>
                 <p className='font-bold text-white'>Tempor malesuada eget placerat proin turpis ut at tortor. Amet sed bibendum nisl ut nibh at. Praesent porttitor fusce sed eu dolor enim turpis sociis.
                    Viverra est ultrices feugiat sociis lacinia pretium in placerat. Ultrices nibh quisque eu orci aliquam enim
 et sapien aliquet. Ac viverra malesuada at arcu metus. Dignissim fames sit bibendum velit imperdiet felis. Maecenas egestas viverra a accumsan maecenas tortor. Est convallis a volutpat enim faucibus congue facilisis hac ultrices.</p>
               <p className='w-[140px] text-white'>Icons adds</p>
               </div>
               <div>
                 
               </div>
             </div>

    </div>
  )
}

export default About