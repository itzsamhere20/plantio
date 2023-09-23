import React from 'react'
import  {GiHummingbird} from "react-icons/gi"
import logo from "../../assets/logo.png"
import {HiOutlineBars3BottomRight} from "react-icons/hi2"
export default function Navbar() {
    const linkStyle='px-4 py-2 cursor-pointer hover:text-white  hover:rounded-full hover:bg-green-700 transition-all '
    return (
        
        <div className='flex  lg:absolute w-[100%] px-4 lg:px-48 py-3   justify-between h-[75px] md:h-[90px] lg:h-[120px] items-center z-[100] shadow-xl lg:shadow-none '>
          
          <div className='flex w-max h-[100%] '>
            
                <img src={logo} alt='logo' className='w-[100%] h-[100%] object-contain cursor-pointer' />
                
        
            </div>

           <div className='flex  h-auto' >
            <ul className='hidden lg:flex gap-10  text-green-700  capitalize font-poppins font-[500] tracking-wide'>
                <li className={linkStyle}>home</li>
                <li className={linkStyle}>about</li>
                <li className={linkStyle}>contact</li>
                 
            </ul>
           </div>
           <div  className='lg:hidden flex w-max h-[100%] justify-center items-center text-3xl md:text-5xl  cursor-pointer text-green-700' > 
           <HiOutlineBars3BottomRight/>
           </div>
           
           

          

            
        </div>
    )
}
