import React from 'react'
import "./service.css"
import service1 from "../../assets/service1.jpg"
import service2 from "../../assets/service2.jpg"
import service3 from "../../assets/service3.jpg"
import {BsArrowRight} from "react-icons/bs"

export default function Service() {
  const service_box='flex flex-col w-[100%] h-auto overflow-hidden items-center md:items-start';
  const service_img='flex  w-[100%] h-[900px] md:h-[400px] lg:h-[600px] cursor-pointer object-cover mb-[3%] hover:animate-shake'
  return (


    <div className='grid grid-cols-1 md:grid-cols-3 items-center w-[95%] mx-[2.5%] h-auto pt-[70px]  md:gap-10 pb-[50px] '>

 


<div className={service_box}>
    <img src={service1} className={service_img} alt='service 1 img' />

  <div className='service_title'>

    <div className='flex items-center  w-[100%] gap-[5px] md:gap-[6.5px] lg:gap-[8px]  h-max'>
      Live <i className='text-green-800'>plants </i>
      <BsArrowRight className='arrow' />
    </div> 
      <div className='line'> </div>

    </div>
  
  </div>





  <div className={service_box}>
    <img src={service2} className={service_img} alt='service 2 img' />

  <div className='service_title'>

    <div className='flex items-center gap-[5px] md:gap-[6.5px] lg:gap-[8px]   h-max'>
      plant <i className='text-green-800'>care </i>
      <BsArrowRight className='arrow' />
    </div> 
      <div className='line'> </div>

    </div>
  
  </div>





  



 <div className={service_box}>
    <img src={service3} className={service_img} alt='service 3 img' />

  <div className='service_title'>

    <div className='flex items-center gap-[5px] md:gap-[6.5px] lg:gap-[8px]   h-max'>
      fall <i className='text-green-800'>collection </i>
      <BsArrowRight className='arrow' />
    </div> 
      <div className='line'> </div>

    </div>
  
  </div>


 


 
 




    </div>
  )
}
