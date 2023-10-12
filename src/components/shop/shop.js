import axios from 'axios';
import React, { useEffect, useState,useContext, createContext } from 'react'
import ProductDetail from '../productDetail/productDetail';

export const detaildata = createContext();


export default function Shop() {

    const [loading,setLoading]=useState(true);
    const [filter, setFilter] = useState('')
    const [products,setProducts]=useState([]);
    const [categories,setCategory]=useState([]);
    const [detail,setdetail]=useState([]);
    



const fetchData =()=>
{

    axios.all([
       axios.get('https://fakestoreapi.com/products/'+filter),
        axios.get('https://fakestoreapi.com/products/categories'),
        

    ])
    .then(axios.spread((product,category) => 
    {
       
        setProducts(product.data);
        setCategory(category.data);
        console.log('Data diliverd');
        console.log("products data "+products);
        console.log("category data" +categories);
        setLoading(false);
        

    }));
}
    useEffect(()=>
    { fetchData();

    },[loading])

console.log("filter:" +filter);
console.log(products)

console.log('fwcgbtg456435634563454  :  '+detail)

  return (
    <>
   <detaildata.Provider value={detail}>
     <div className='gap-5  py-10 flex w-[100%] h-max justify-center items-center'>
        <p  className='py-3 px-5 text-white bg-green-600 rounded-full cursor-pointer' onClick={()=>setFilter('')} >All</p>
        <p  className='py-3 px-5 text-white bg-green-600 rounded-full cursor-pointer' onClick={()=>setFilter('category/'+categories[0])}>Electronics</p>
        <p  className='py-3 px-5 text-white bg-green-600 rounded-full cursor-pointer' onClick={()=>setFilter('category/'+categories[1])}>Jewellery</p>
        <p  className='py-3 px-5 text-white bg-green-600 rounded-full cursor-pointer' onClick={()=>setFilter('category/'+categories[2])}>men's Clothing</p>
        <p  className='py-3 px-5 text-white bg-green-600 rounded-full cursor-pointer' onClick={()=>setFilter('category/'+categories[3])}>woman's Clothing</p>
     </div>
    {loading?<div className='flex fixed w-[100vw] h-[100vh] justify-center items-center bg-[rgb(1,1,1,0.6)]'>
        <div className='w-[300px] h-[300px] bg-green-800 animate-spin duration-[5s]'></div>
    </div> : 
 
    
   
    <div className='grid grid-cols-4 w-[100%] px-[5%] gap-10 h-max py-10 '>

        {products.map((data)=>{
            return(
                
       <div className='flex flex-col w-[100%] h-max cursor-pointer' onClick={()=>setdetail(data)}>
        <img src={data.image} alt="product image" className='block w-[100%] h-[300px] object-contain' />
        <p className='text-md font-poppins py-5 px-5 leading-tight'>{data.title}</p>

       </div>
      
            )
})
        }
       
       

    </div>
//  ------------------loading-bracket
    }
    

    </detaildata.Provider>

    </>
  
  )


// const[data,setData]=useState([]);
// const[data2,setData2]=useState([]);

// const[search,setSearch]=useState('');

// useEffect(()=>
// {
//     axios.get('https://reqres.in/api/users/')
//     .then((res)=>
//     {
//         setData(res.data.data)
//     })
    

// },[])

// const callapi=()=>
// {
//     axios.get('https://reqres.in/api/users?page=2')
//     .then((res)=>
//     {
//         setData2(res.data.data)
//     })

// }

 
 

// console.log(data)


// return(
//     <div className='flex justify-center items-center flex-col '>
//     <input   onChange={(e) => setSearch(e.target.value)}
       
//     type="text" placeholder='search ...' className='w-[500px] h-[40px] px-5 py-2 border-2 border-purple-400 my-5 self-center flex justify-center' />
//      <div className='grid grid-cols-3  h-max w-[100%]'> 
     
//     {data.filter((data)=>{return search.toLowerCase()==='' ? data : (data.first_name.toLowerCase() + data.last_name.toLowerCase() +data.email.toLowerCase() ).includes(search)   } )
//     .map((data)=>
//     { return(
           
//             <div className='flex flex-col w-[100%] h-max py-5 px-5' kay={data.id}>
//                 <img src={data.avatar} className='w-[100px] h-[100px] object-contain' />
//             <p>{data.first_name}  {data.last_name}</p>
//             <p>{data.email}</p>
        
        
//           </div>
            
        
//         )
//     })
// }


//  <div className=' py-4 px-6 bg-purple-600 text-white justify-center items-center' onClick={callapi}>Click me to call 2nd api</div>
      
// {data2.map((data)=>
//     { return(
           
//             <div className='flex flex-col w-[100%] h-max py-5 px-5' kay={data.id}>
//                 <img src={data.avatar} className='w-[100px] h-[100px] object-contain' />
//             <p>{data.first_name}  {data.last_name}</p>
//             <p>{data.email}</p>
        
        
//           </div>
            
        
//         )
//     })}
    
//       </div>
   
//     </div>
// )
}
