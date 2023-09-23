import React from 'react'
import story from "../../assets/hero2.jpg"
export default function Story() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-[95%] h-max mx-[2.5%] py-[70px] gap-10 lg:gap-0'>

      <img src={story} alt="video thumbnail" className='w-[100%] h-[300px] md:h-[420px] lg:h-[520px]  object-cover' />

<div className='flex flex-col w-[100%] lg:w-[90%] h-[100%]  ml-0 lg:ml-[10%] justify-center items-center lg:items-start pl-[5%] lg:pl-[10%] pr-[5%] lg:pr-[0%] text-center lg:text-left'>
 
  <p className='font-poppoins  tracking-[2px] text-[11px] lg:text-sm text-green-900'>LIFE GATHERS AROUND PLANTS</p>
  <h1 className='text-2xl lg:text-4xl font-[400] lg:font-[600] font-libre mt-[5%] md:mt-[3%] lg:mt-[5%] leading-[32px]  tracking-[2px] text-gray-800'>A Houseplant’s Journey</h1>
  <i className='text-2xl lg:text-4xl font-[400] lg:font-[600] font-libre tracking-[2px] text-green-800 mt-1'>Home</i>
  <p className='flex font-poppins mt-[6%] md:mt-[4%] lg:mt-[6%] text-[13.5px] md:text-[14.5px]  font-[400] text-gray-600 tracking-[0.3px]'> Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus mauris ipsumaliquam libero, non adipiscing dolor urna a orci. Fusce convallis metus id felis luctus adipiscing. Integer tincidunt.</p>

  <button className='flex bg-green-950 text-white text-[11.5px]  tracking-[2px] w-max mt-[7%] md:mt-[5%] lg:mt-[7%] font-poppins uppercase py-4 md:py-4 px-7 md:px-9 hover:bg-gray-950 transition-[4.3s] transition-all-ease-in-out '>Our Stories</button>

</div>



    </div>
  )
}
