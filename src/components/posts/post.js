import React from 'react'
import "./post.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import post1 from "../../assets/hero1.jpg"
import post2 from "../../assets/hero2.jpg"
import post3 from "../../assets/hero3.jpg"
import post4 from "../../assets/hero4.jpg"
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Autoplay } from 'swiper/modules';

export default function Post() {
  const post_box="flex w-[100%] h-[20vh] overflow-hidden";
  const post_img="flex w-[100%] h-[100%] object-cover hover:scale-100";
  return (

    <div className='flex flex-col w-[100%] h-max px-[2.5%] justify-center items-center pt-[70px] pb-[50px]  border-b-[1.5px]'>
      

      <h1 className='flex font-libre text-2xl w-[100%] justify-center pb-2'>#bring<i className='text-green-800'>lifein</i></h1>
      <p className='font-poppins flex text-[12.5px] tracking-wide md:text-[13.5px] lg:text-[15.5px] text-gray-700  px-5 pb-[50px]  text-center '>Our community has a thing for plant styling. Get inspired.</p>
    
    

   
<Swiper
        slidesPerView={4}
        spaceBetween={60}
        loop={true}
      
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,

        }}

        
        
        breakpoints={{
          240: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
         
        }}
        modules={[Autoplay]}
        
        className="w-[100%] h-auto flex "
      >


        <SwiperSlide>
          <div className='post_box'>
          <img src={post1} alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src={post1} alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src={post1} alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src={post1} alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src={post1} alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>



      </Swiper>
    
    
    </div>
  )
}
