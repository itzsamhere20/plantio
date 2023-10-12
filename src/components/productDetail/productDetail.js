import React, { useContext, useState } from 'react'
import { detaildata } from '../shop/shop';


export default function ProductDetail() {
    console.log('checking data from child component      :    '+ useContext(detaildata))
    const  [Data2,setData2] = useState(useContext(detaildata));
    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)


    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)
    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)


    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)
    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)


    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)
    
    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)
    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)


    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)
    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)


    console.log('wdfqxfxcrgercg-er-f0-=er     :'+Data2)

   

   



   

    


  return (
    <>

   
 
  
    <div className='h-[50vh] bg-blue-400'>
        {/* <img src={detail} className='w-[100%] h-[100%] object-contain' alt='product image' /> */}
        <div className='text-2xl'>{Data2}454 543</div>
    </div>

  



</>
    
  )
}
