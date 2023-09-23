import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import product1 from "../../assets/hero1.jpg"
import product2 from "../../assets/hero2.jpg"
import product3 from "../../assets/hero3.jpg"
import product4 from "../../assets/hero4.jpg"
import product5 from "../../assets/hero5.jpg"
import product6 from "../../assets/hero6.png"

export default function New() {
  const product_box='p-2 cursor-pointer flex flex-col w-auto h-max ';
  const product_img='block w-[100%] h-[250px] md:h-[320px] lg:h-[400px] object-cover';
  const product_title='mt-5 mb-1 h-max text-center font-libre text-gray-600 tracking-[1px] text-[14px] md:text-sm capitalize'
  return (
    <div className='flex flex-col w-[95%] h-max mx-[2.5%] py-[70px] justify-center items-center'>
      <h1 className='font-libre gap-5 text-2xl md:text-3xl capitalize  pb-[20px] text-gray-800'>new <i className='text-green-800'>Arrivals </i></h1>

<Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
         
        }}
        modules={[Pagination]}
        className="w-[100%] h-[380px] md:h-[450px] lg:h-[550px] flex"
      >




        <SwiperSlide>
          <div className={product_box}>
            <img src={product1} alt="new products" className={product_img} />
            <div className={product_title}><h1>pine tree</h1>
            <h1>$100</h1>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className={product_box}>
            <img src={product2} alt="new products" className={product_img} />
            <div className={product_title}><h1>pine tree</h1>
            <h1>$100</h1>
            </div>
            </div>
        </SwiperSlide>





        <SwiperSlide>
          <div className={product_box}>
            <img src={product3} alt="new products" className={product_img} />
            <div className={product_title}><h1>pine tree</h1>
            <h1>$100</h1>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className={product_box}>
            <img src={product4} alt="new products" className={product_img} />
            <div className={product_title}><h1>pine tree</h1>
            <h1>$100</h1>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className={product_box}>
            <img src={product5} alt="new products" className={product_img} />
            <div className={product_title}><h1>pine tree</h1>
            <h1>$100</h1>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className={product_box}>
            <img src={product6} alt="new products" className={product_img} />
            <div className={product_title}><h1>pine tree</h1>
            <h1>$100</h1>
            </div>
            </div>
        </SwiperSlide>








      </Swiper>


    </div>
  )
}
