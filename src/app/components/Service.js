import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from 'next/image';
import Rosely from '../../../public/images/Rosely.png'
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdCameraAlt } from "react-icons/md";







const Service = () => {
  return (
      <>
      <section className='bg-black mt-12 py-6'>
    <div className='container mx-auto'>
        <h1 className='text-[16px] font-bold text-[#25FD54] text-center py-6'>Service</h1>
        <p className='text-white font-bold text-[32px] text-center'>We offer a wide array of services</p>
        {/* parent */}
        <div className='flex gap-6  pt-6 lg:flex-nowrap flex-wrap lg:justify-start justify-center'>
            <div className='bg-[#000000CC] xl:w-[636px] md:w-[610px] xl:sm:w-[400px] w-[310px] border'>
                <button className='bg-white px-6 py-2 font-bold text-center mx-12 mt-12'> Mobile App</button>
                <p className='text-[32px] font-bold text-white py-6 px-12'>Apps That Transform<br/> Tomorrowv</p>
                <div className='inline-flex border border-[#24FD54] px-2 py-2 rounded-full mt-6 mx-12  mb-6'>
                <IoArrowForwardOutline  className='text-[#24FD54]'/></div>
                </div>
            
            {/* right */}
            <div className='bg-[#000000CC] xl:w-[636px] md:w-[610px] xl:sm:w-[400px] w-[310px] border'>
                <button className='bg-white px-6 py-2 font-bold text-center mx-12 mt-12'> web Development</button>
                <p className='text-[32px] font-bold text-white py-6 px-12'>Engineering Reliable Web <br/>Solutions</p>
                <div className='inline-flex border border-[#24FD54] px-2 py-2 rounded-full mt-6 mx-12 mb-6'>
                <IoArrowForwardOutline  className='text-[#24FD54]'/></div>
                </div>
                </div>
                {/* 2ndparent */}
                
                <div className='flex gap-6 pt-6 lg:flex-nowrap flex-wrap lg:justify-start justify-center'>
            <div className='bg-[#000000CC] xl:w-[627px] md:w-[610px] xl:sm:w-[400px] w-[310px] border'>
                <button className='bg-white px-6 py-2 font-bold text-center mx-12 mt-12'> Sotware Development</button>
                <p className='text-[32px] font-bold text-white py-6 px-12'>Crafting Code for Your<br/> Unique Goals</p>
                <div className='inline-flex border border-[#24FD54] px-2 py-2 rounded-full mt-6 mx-12 mb-6 '>
                <IoArrowForwardOutline  className='text-[#24FD54]'/></div>
                </div>
            
            {/* right */}
            <div className='bg-[#000000CC] xl:w-[627px]  md:w-[610px] xl:sm:w-[400px] w-[310px] border'>
                <button className='bg-white px-6 py-2 font-bold text-center mx-12 mt-12'> Digital Marketing</button>
                <p className='text-[32px] font-bold text-white py-6 px-12'>The Wise Choice for Digital<br/> Marketing Excellence</p>
                <div className='inline-flex border border-[#24FD54] px-2 py-2 rounded-full mt-6 mx-12 mb-6'>
                <IoArrowForwardOutline  className='text-[#24FD54]'/></div>

                </div>
        

                </div>
    </div>
    </section>
    {/* team */}
    <div className='conatiner mx-auto'>
        <h1 className='text-[20px] font-bold text-center pt-6'>Our Team</h1>
        <p className='text-[32px] font-bold text-center'>our professional team</p>
        <div className=' mx-12 flex gap-6 lg:flex-nowrap flex-wrap'>
        <div className='bg-gray-100 w-[300px]'>
            <Image src={Rosely} alt='rosely'/>
            <p className='font-bold pt-2'>Roselyn Ward</p>
            <p className=' font-semibolds pt-2'>Founder & CEO</p>
            <p className='pt-2'>Dictum ut volutpat duis faucibus
          mauris nec. At quam molestie</p>
          <div className='flex gap-5 pt-2 mx-2'>
               <BsFacebook />
          <TiSocialLinkedinCircular />
              <MdCameraAlt />
            </div>
        </div>
        {/* 2 */}
        <div className='bg-gray-100 w-[300px] '>
            <Image src={Rosely} alt='rosely'/>
            <p className='font-bold pt-2'>Roselyn Ward</p>
            <p className=' font-semibolds pt-2'>Founder & CEO</p>
            <p className='pt-2'>Dictum ut volutpat duis faucibus
          mauris nec. At quam molestie</p>
          <div className='flex gap-5 pt-2 mx-2'>
               <BsFacebook />
          <TiSocialLinkedinCircular />
              <MdCameraAlt />
            </div>
        </div>
        {/* 3 */}
        <div className='bg-gray-100 w-[300px] '>
            <Image src={Rosely} alt='rosely'/>
            <p className='font-bold pt-2'>Roselyn Ward</p>
            <p className=' font-semibolds pt-2'>Founder & CEO</p>
            <p className='pt-2'>Dictum ut volutpat duis faucibus
          mauris nec. At quam molestie</p>
          <div className='flex gap-5 pt-2 mx-2'>
               <BsFacebook />
          <TiSocialLinkedinCircular />
              <MdCameraAlt />
            </div>
        </div>
        {/* 4 */}
        <div className='bg-gray-100 w-[300px]'>
            <Image src={Rosely} alt='rosely'/>
            <p className='font-bold pt-2'>Roselyn Ward</p>
            <p className=' font-semibolds pt-2'>Founder & CEO</p>
            <p className='pt-2'>Dictum ut volutpat duis faucibus
          mauris nec. At quam molestie</p>
          <div className='flex gap-5 pt-2 mx-2'>
               <BsFacebook />
          <TiSocialLinkedinCircular />
              <MdCameraAlt />
            </div>
        </div>
        
        
        </div>
        
    </div>
    </>
  )
}

export default Service