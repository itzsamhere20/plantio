import React,{useState} from 'react'
import logo from "../../assets/logo.png"
import {HiOutlineBars3BottomRight} from "react-icons/hi2"

import  { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
export default function Navbar() {

    const [scrolled, setscrolled] = useState(false);
    const [clicked, setClicked] = useState(false);
    const ClickChecker =()=>
    {
        setClicked(!clicked);
    };
  const changeNavbar = () =>{
     if(window.scrollY >= 100){
       setscrolled(true);
     }
     else{
        setscrolled(false);
      }
      if(window.scrollY <=100 && window.innerWidth>=1024)
      {
        setClicked(false)
      }
    
     
     
  };
  window.addEventListener('scroll', changeNavbar);


    const linkStyle='px-4 py-2 cursor-pointer hover:text-white  hover:rounded-full hover:bg-green-800 transition-all ease-in-out duration-1000 '

    const linkStyle2='flex text-2xl cursor-pointer hover:text-5xl';
    return (
        
        <div className='flex  lg:absolute w-[100%] px-4 md:px-12 lg:px-40 py-3   justify-between h-[75px] md:h-[90px] lg:h-[100px] items-center z-[100] absolute shadow-md lg:shadow-none '>
          
          <div className='flex w-max h-[100%] '>
            
                <img src={logo} alt='logo' className='w-[100%] h-[100%] object-contain cursor-pointer' />
                
        
            </div>

           <div className='flex  h-auto' >
            <ul className='hidden lg:flex gap-10  text-green-800  capitalize font-poppins font-[500] tracking-wide'>
                <li className={linkStyle}>home</li>
                <li className={linkStyle}>about</li>
                <li className={linkStyle}>Services</li>
                <li className={linkStyle}>contact</li>
                 
            </ul>
           </div>
           <div  className='lg:hidden flex w-max h-max justify-center items-center text-3xl md:text-4xl  z-[99] cursor-pointer text-green-800  linear duration-300' onClick={()=>setClicked(!clicked)}  style={{rotate:clicked?'90deg' :'0deg', }}> 
           {clicked? <AiOutlineClose /> : <HiOutlineBars3BottomRight/> }
           </div>






           <div className='z-50 fixed flex-col ' onClick={ClickChecker} > 


           <div className='flex fixed right-5 w-[50px] h-[50px] bg-green-700 rounded-[100%] text-white text-xl justify-center items-center z-50  linear duration-300 ' style={{top:scrolled? '40px' :'-100px',rotate:clicked?'90deg' :'0deg', }}>
           {clicked? <AiOutlineClose /> : <GiHamburgerMenu />} 
           </div>


                 <div className=' flex fixed  h-[100vh]  top-[0] right-0 bg-[#ffffffb6] overflow-hidden  backdrop-blur rounded-md ease-in-out duration-700 overflow-y-visible' style={{ width:clicked? '100vw' :'0px'}}>

                    <ul className=' flex  font-libre uppercase  text-green-800 flex-col  justify-center items-center py-10 px-4 gap-10 linear duration-[1000ms]' style={{width:clicked? '100%' : '0px', color: clicked? 'rgb(22 101 52 )':'white'}}>

                    <li className={linkStyle2}>home</li>
                    <li className={linkStyle2}>About</li>
                    <li className={linkStyle2}>Services</li>
                    <li className={linkStyle2}>contact</li>
                 
                    </ul>



                 </div>

           </div>
           




           
           

          

            
        </div>
    )
}
