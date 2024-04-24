"use client"
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import mysql from 'serverless-mysql';
import { useRouter } from 'next/router';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart } from '../counterSlice'
import Link from 'next/link';
import Header from '../components/header/page';


export default function Home() {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const dispatch = useDispatch()
   
    const handleClick = (pr) => {
    
      dispatch(removeFromCart(pr));
    };
    return(<>
        <Link href="/products">pro</Link>

        <div style={{height:'1000px'}}>
        <Header/> 
        <div className="container  mt-10  shadow-sm  py-7 mx-auto flex justify-around items-center flex-wrap">

        {cart !=null && cart.map((product:any) => (
       <div className="max-w-sm mt-10  sm:ml-10 rounded overflow-hidden shadow-lg">
       <img className=" w-72" src={product.img} alt="Card image"/>
       <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">{product.intitule}</div>
         <p className="text-gray-700 text-xl">
         {product.price}DH
         </p>
        
       </div>
       <div className='flex justify-around items-center'>
        <button className= "bg-red-700 w-20 text-4xl text-white"  type="button">-</button>
       <span className= " text-2xl text-black font-semibold">{product.quantity}</span>
<button  type="button" className= "w-20 bg-green-700 text-3xl text-white" >+</button>
</div> <button type="button" onClick={()=>{handleClick(product)}}/*dispatch(addToCart(props.product)console.log(props.product*/ className=" bg-slate-800 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
     Remove 
</button>
       </div>
        ))}
        </div>

      <div>
      
      </div>
    </div>
        </>
    )

}