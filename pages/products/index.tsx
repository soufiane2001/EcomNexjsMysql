import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import mysql from 'serverless-mysql';
import { useRouter } from 'next/router';
import { RiDeleteBin2Line } from 'react-icons/ri';

const db = mysql({
  config: {
    host: "localhost",
    database: "cod",
    user: "root",
    password: ""
  }
});
 
import Link from 'next/link';
import Header from '../components/header/page';
import Categorie from '../components/categories/page';
import Card from '../components/card/card';
import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart } from '../counterSlice'
export default function Home({products}) {

var [panier,setpanier]=useState()

const router = useRouter();

const count = useSelector((state: RootState) => state.cart.cart)
const dispatch = useDispatch()
var [type,setType]=useState(0);
var changecat=(n)=>{
setType(n)
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name:'',prix:"" }),
    });
    if (response.ok) {
      // Handle successful insertion
      router.replace('/products');
    } else {
      // Handle error
    }
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div>
     
      <Header /> 
      <Categorie changeType={changecat}/>

 <div className="container  mt-4  shadow-sm  py-7 mx-auto flex justify-around items-center flex-wrap">
        {products !=null && type==0 ? products.map((product:any) => (
        <Card product={product}  />
        )):products.map((product:any) => {
          if(product.categorie==type){
            return  <Card product={product}  />
          }
        } )}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  var pr=[];
    const results:any = await db.query('SELECT * FROM products');
    
  
await db.end();
results.map((x)=>{
  pr.push(x)
})
  console.log(JSON.stringify(pr))
 // const res = await fetch('https://fakestoreapi.com/products');
 // const data = await res.json();

  return {
    props: {
      products:JSON.parse(JSON.stringify(pr)), 
    },
  };
}