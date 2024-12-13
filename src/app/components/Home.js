import React from 'react'
import Image from 'next/image'
import video from '../../../public/images/video.png'
const Home = () => {
  return (
      <>
      <section className=' bg-black'>
          <div className=' container mx-auto'>
              <div className='pt-24'>
                  <p className=' capitalize text-[16px] text-[#25FD54] lg:text-start text-center'>WELLCOME! </p>
                  <p className='text-white text-[32px] font-bold py-6 lg:text-start text-center'>Your Digital Journey<br/> 
Starts Here</p>
<p className='text-white text-[16px] py-4 lg:text-start text-center'>
Non tristique et nec nibh nisl aliquet et amet posuere. Vel nunc aliquam<br/>
 magna lacinia nulla risus. Montes magna praesent scelerisque pharetra
</p>
<div className='py-12 lg:text-start text-center'>
<button className=' font-bold px-6 py-2 border  border-[#25FD54] bg-[#25FD54]'> Learn More</button>
</div>
</div>
          </div>
      </section>
      {/* 2 */}
      <div className='container mx-auto'>
          <div className='flex justify-around py-6 lg:flex-nowrap flex-wrap'>
          <div>
              <p className='text-[32px]  font-bold  px-10'> 25</p>
              
              <p>Years of experience</p>
          </div>
          <div>
              <p className='text-[32px]  font-bold  px-10'>99%</p>
              
              <p>Customer satisfaction</p>
          </div>
          <div>
              <p className='text-[32px]  font-bold'>1800</p>
              
              <p>Projects done</p>
          </div>
          <div>
              <p className='text-[32px]  font-bold px-4'>42</p>
              
              <p>Team members</p>
          </div>
          

      </div>
      <p className='text-center border-t-4 border-[#25FD54] pt-6 text-[16px] font-bold'>Video</p>
      <p className='text-center py-6 text-[32px] font-bold'>Crafting Resilient Digital Infrastructures</p>
      <Image src={video} alt='video' className='xl:w-[1240px] lg:w-[100px] md:w-[700px] xl:sm:w-[400px] w[310px]'/>
      </div>
    </>
  )
}

export default Home