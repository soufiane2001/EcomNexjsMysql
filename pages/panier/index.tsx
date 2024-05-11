"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import mysql from 'serverless-mysql';
import { useRouter } from 'next/router';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart ,add,decriment} from '../counterSlice'
import Link from 'next/link';
import Header from '../components/header/page';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';


export default function Home() {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const dispatch = useDispatch()
   
    const handleClick = (pr) => {
    
      dispatch(removeFromCart(pr));
    };
    return(<div>
      

        <div style={{height:'auto'}}>
        <Header/>  
        {cart.length>0  &&
        <Link href="/finish" className='flex items-center w-24 m-4 px-3 py-1' style={{backgroundColor:'black',fontSize:22,color:"white"}} >
          Finish 
        <AiOutlineCheckCircle />
        </Link>
}
        <div className="container  mt-4  shadow-sm  py-7 mx-auto flex justify-around items-center flex-wrap">
       
        {cart !=null && cart.map((product:any) => (
       <div className=" w-62 mt-10  sm:ml-10 rounded overflow-hidden shadow-lg">
          <div style={{backgroundColor:'white'}}>
       <img className=" w-60 h-52" src={product.img} alt="Card image"/>
       <div className="px-6 py-4">
         <div className=" text-xl mb-2">{product.intitule}</div>
         <p className="text-gray-700 text-xl">
         {product.price}DH
         </p>
        
       </div>
       <div className='flex justify-around items-center'>
        <button onClick={()=>{dispatch(decriment(product))}} className= "bg-red-700 w-10 rounded-full text-4xl text-white"  type="button">-</button>
       <span className= " text-2xl text-gray-600 ">{product.quantity}</span>
<button onClick={()=>{dispatch(add(product))}} type="button" className= " w-10 rounded-full bg-green-700 text-3xl text-white" >+</button>
</div> 
<br />
<button  type="button" onClick={()=>{handleClick(product)}} className="bg-slate-800  hover:bg-slate-950 text-white text-2xl font-bold py-2 px-4 rounded flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
<RiDeleteBin2Line />
</button>
</div>
       </div>
        ))}
        
        </div>

      <div>
      
      </div>
    </div>
        </div>
    )

}