import React,{useState} from 'react'
import aboutimg from"../../assets/aboutimg2.png"
import aboutimg1 from"../../assets/hero1.jpg"
import aboutimg2 from"../../assets/hero2.jpg"
import aboutimg3 from"../../assets/hero3.jpg"
export default function AboutUs() {
    const bg='https://images.unsplash.com/photo-1623824505948-2938b8818e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';

    const about_img='https://images.pexels.com/photos/10220774/pexels-photo-10220774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


    const[hovered,setHoverd]=useState(false);
    const[rotate,setRotate]=useState('');
    const[negativerotate,setNegativeRotate]=useState('');
    const work_box="flex flex-col w-[100%] h-max px-10 py-[20px] justify-center items-center "
    const work_box_heading="flex flex-wrap justify-center h-max mt-10 font-libre  capitalize text-xl md:text-[1.1rem]  lg:text-[1.2rem] gap-[6px] text-gray-700";
    const  onMouseEnter = e => {
    setHoverd(true);
      };
    
     const onMouseLeave = e => {
        setHoverd(false );
      };




      const checkRotate=()=>
      {
        if(window.innerWidth>150 && window.innerWidth<=768)
        {
          setRotate('5deg')
          setNegativeRotate('-5deg')
        }
        else if (window.innerWidth>2000) {
            setRotate('3deg')
            setNegativeRotate('-3deg')

            
        }
       
        else
        {
          setRotate('7deg')
          setNegativeRotate('-7deg')
        }
    
      };
      window.addEventListener('scroll', checkRotate)


    
  return (
    <>

    {/* -----------about us heading----------------- */}

    <div className='flex w-[100%]  h-[300px] justify-center items-center  font-libre text-5xl text-green-950' style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>About Us</div>

  {/* ------------------------plant img---------------------------- */}

     <div className='flex justify-center items-center w-[100%] p-10 '>
    <img src={aboutimg} alt="plant in pot" className='m-w-[100%]  py-5 ' />
    </div>


{/* --------------------------heading section --------------- */}


             <div className='flex flex-col w-[100%] justify-center items-center   '>
                 <p className='uppercase font-poppins text-md tracking-[1px]  text-slate-700'>FLACIO PHOTOSYNTHESIS STORIES</p>
                 <h1 className='font-libre text-[50px] text-gray-800 text-center px-32 py-5 leading-tight'>
                 We connect buyers and sellers with suitable, eco-friendly <i>products</i>
                 </h1>
                 <p className='w-[70%] flex text-center leading-relaxed tracking-[0.5px]  text-sm text-slate-500 font-poppins'> 
                 Nothing adds more beauty and comfort to our homes and offices than the lush flowers and foliage of indoor plants. Bedrooms, bathrooms, kitchens, cubicles… There really isn’t a space a houseplant can’t enliven. Just add light and water, and you’ve got a growing indoor oasis. Bringing plants into your home is aesthetically pleasing and – amazingly – plants can offer strong health benefits as well!
             
                 </p>
             </div>


             {/* ----------------------------------3 imgs area------------------------- */}



             <div className='grid grid-cols-2 w-[100%] p-10 justify-center items-center'> 

                    <img src={about_img} alt="" className='w-[100%] h-[320px] 
                    md:h-[500px] object-cover bg-slate-300  mt-16 md:mt-32 ease-in-out duration-700 '
                    style={{rotate:hovered? negativerotate:'0deg'}} />




                    <img src={about_img} alt="" className='w-[100%] h-[320px] 
                      md:h-[500px]  object-cover  -scale-x-[1] mt-16 md:mt-32   ease-in-out duration-700  '
                    style={{rotate:hovered? rotate:'0deg'}} />

             </div>
             <div className='flex w-[100%] justify-center items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
             <img src={aboutimg} alt="" className='w-max   h-[450px] md:h-[600px] object-contain ease-in-out duration-700 px-10  -ml-[10px] overflow-hidden z-[9]  -mt-[450px] md:-mt-[680px] hover:-mt-[480px] md:hover:-mt-[750px]'
            />
             </div>





             {/* ----------------------hows iy work area --------------- */}




                  <div className='w-[100%] flex flex-col bg-cyan-100 justify-center items-center ' > 

                          <h1 className='flex text-4xl font-libre text-gray-800 pt-20 gap-[5px] lg:gap-[8px] flex-wrap'> Here's how it <i>works</i></h1>



                          <div className='grid grid-cols-1 md:grid-cols-3 pt-14 pb-20  w-[100%]   '>



                    <div className={work_box}>
                      <img src={aboutimg1} className='w-[75px] md:w-[150px] hover:animate-shake duration-100 ' />
                      <h1 className={work_box_heading}>Pick a plant</h1>
                      
                    </div>
                    
                    
                    
                    
                    
                    <div className={work_box}>
                      <img src={aboutimg2} className='w-[75px] md:w-[150px] hover:animate-shake duration-100 ' />
                      <h1 className={work_box_heading}>Have it shiped</h1>
                      
                    </div>
                    
                    
                    
                    
                    
                    
                    <div className={work_box}>
                    <img src={aboutimg3} className='w-[75px] md:w-[150px] hover:animate-shake duration-100 ' />
                      <h1 className={work_box_heading}>Watch it grow</h1>
                      
                    </div>
                    
                    
                    
                        </div>


    </div>




    </>
  )
}
