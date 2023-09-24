import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa"
import {FaXTwitter} from 'react-icons/fa6' 
export default function Footer() {

const footer_box="flex flex-col w-[100%]  font-poppins";
const footer_box_heading="text-md  uppercase  tracking-[2px] text-gray-600 font-[500]";
const footer_ul="flex flex-col pt-5 md:pt-6 lg:pt-8 gap-[18px] text-gray-400 text-[14.5px] font-[400]";
const footer_li="w-max cursor-pointer hover:text-gray-600 ease-in-out duration-300 capitalize";
const footer_social="flex  justify-center items-center text-gray-800  text-[16px] h-max  border-gray border-[0.5px] py-3 px-3  rounded-full overflow-viible duration-300 ease-in-out hover:bg-green-900 hover:text-white"

  return (
    <div className='flex flex-col w-[100%]  h-max'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] h-max  py-[50px] px-[2.5%] gap-10'>



      <div className={footer_box}>
          <h1 className={footer_box_heading}>
            conpamy
            </h1>

          <ul className={footer_ul}>

            <li className={footer_li}>
              About
            </li>
            <li className={footer_li}>
              Services
            </li>
            <li className={footer_li}>
              our garentee
            </li>
            <li className={footer_li}>
              Corporate orders
            </li>
            
          </ul>
          
        </div>





        <div className={footer_box}>
          <h1 className={footer_box_heading}>
            support
            </h1>

          <ul className={footer_ul}>

            <li className={footer_li}>
            Help + FAQs
            </li>
            <li className={footer_li}>
            Returns
            </li>
            <li className={footer_li}>
            Contact Support
            </li>
            <li className={footer_li}>
            Shipping
            </li>
            
          </ul>
          
        </div>




        <div className={footer_box}>
          <h1 className={footer_box_heading}>
            plant questions?
            </h1>

          <ul className={footer_ul}>

            <li className={footer_li}>
            Plant Care Tips
            </li>
            <li className={footer_li}>
            Plant Life Blog
            </li>
            <li className={footer_li}>
            Meet Plant Mom
            </li>
            <li className={footer_li}>
            Vera Plant Care App
            </li>
            <li className={footer_li}>
            Contact the Grow-How™ Team
            </li>
            
          </ul>
          
        </div>




        <div className='flex flex-col w-[100%]  h-[100%]  '>
          <h1 className={footer_box_heading}>
            Stay in loop
            </h1>

          <p className='flex  flex-col font-poppins text-gray-400 text-[14.5px] font-[400] pb-4 pt-8 leading-[23px] '>
          Stay in the loop with special offers, plant-parenting tips, and more.
          </p>
           <div className='w-[100%] h-max flex items-end  py-2 border-b-2 border-black text-poppins  text-sm'>

               <input style={{border:'none'}}type='email' className='flex w-[100%] pr-2 ' placeholder='Enter your email'/>
              <MdEmail className='flex h-max  cursor-pointer text-3xl lg:text-2xl text-green-800 ' /> 
       
            </div>
            <div className='flex w-[100%] h-max gap-5 pt-10'>
             <div  className={footer_social}> <FaXTwitter /></div> 
             <div  className={footer_social}>  <FaFacebookF /></div> 
             <div  className={footer_social}>   <FaInstagram /></div> 
             <div  className={footer_social}>   <FaLinkedinIn /></div> 

            </div>

        </div>


      </div>





      <div className='flex  flex-col md:flex-row md:text-left w-[100%] h-max font-poppins text-gray-400 gap-2 py-3 md:py-5 border-t-[1px] px-[2.5%] justify-between ease-in-out duration-300'>


        <h1 className='text-[12px] md:text-sm flex w-[100%] md:w-max justify-center'>©{new Date().getFullYear()} Plantio Store</h1>
        <ul className=' w-[100%] flex-wrap  md:w-max justify-center flex gap-4 md:gap-8 lg:gap-10 text-[12px] md:text-[13px]'>

          <li className='hover:text-gray-900 cursor-pointer '>
            Terms of Use
          </li>

          <li className='hover:text-gray-900 cursor-pointer '>
          Copyright & Trademark
          </li>

          <li className='hover:text-gray-900 cursor-pointer '>
            Policy
          </li>

          <li className='hover:text-gray-900 cursor-pointer '>
            Sitemap
          </li>
          
          
          
        </ul>
      </div>



          


    </div>
  )
}
