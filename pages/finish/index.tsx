import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import { useRouter } from 'next/router';
import Header from '../components/header/page';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';
import axios from 'axios';
import serverlessMysql from 'serverless-mysql';
import mysql from 'serverless-mysql';
import { useForm } from 'react-hook-form';
import {useFormState,useFormStatus} from 'react-dom'
//import { PrismaClient } from '@prisma/client';
import mysqlaction from '../mysqlserveraction';
import { setCookie } from 'cookies-next';
const db = mysql({
  config: {
    host: "localhost",
    database: "cod",
    user: "root",
    password: ""
  }
});

//const prisma = new PrismaClient();
export default function Home({products}) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [adress, setAdress] = useState('');
  const cart = useSelector((state: RootState) => state.cart.cart)
  var somme:any=0;
  var qte:any=0;
  cart.map((x:any)=>{
    var sm=0;
    sm=x.price*x.quantity;
    somme+=sm;
  })
  cart.map((x:any)=>{
    var qte=0;
    qte+=x.quantity;
  
  })




  const handleSubmit = async (event) => {
  
  event.preventDefault();
    console.log(name+" "+id,qte)
    alert(name+qte+adress+etat)

    try {
       
      var leters=["e","b","l","o","f","c"];
      var random=Math.floor(Math.random()*103440);
      var id=leters[Math.floor(Math.random()*6)]+random;
      var etat="false";
   /*   const db = mysql({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cod',
      })
     
     
  const results = await db.query('INSERT INTO orders VALUES (?,?,?,?,?,?)',[id, name,qte,somme,adress,etat]);

  */
  await setCookie('id', id); 
  await setCookie('name',name); 
  await setCookie('qte',qte); 
  await setCookie('somme', somme); 
  await setCookie('adress', adress); 
  await setCookie('etat', etat); 
  try {
    const response = await axios.post('/api/hello', { id:id,name:name,qte:qte,somme:somme,adress:adress,etat:etat});



    console.log('Data submitted successfully!');
    console.log(response)
  } catch (error) {
    console.error('Error submitting data:', error);
    alert("error")
    
  }



    } catch (error) {
      console.error(error);
      
    } 

    cart.map(async(x)=>{
      const response = await axios.post('/api/datails', { id:id,idpr:x.id,qte:x.quantity});

    })



  };


const initial={
  message:null
}

//const {pending}=useFormStatus();




return(
<div >
<Header/>

<div className=" mt-24 w-3/4 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <h2 className="text-xl font-semibold mb-4">Orders</h2>
  <form onSubmit={handleSubmit} >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
       name
      </label>
      <input name="name" onChange={(e)=>{setName(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email.
      </label>
      <input name="email"  onChange={(e)=>{setEmail(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Tel
      </label>
      <input name="tel"  onChange={(e)=>{setTel(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="tel" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Adress
      </label>
      <input name="adress"  onChange={(e)=>{setAdress(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="ext" />
    </div>
    <div className="flex items-center justify-between">
      <input value="finish the orders." type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
        
    </div>
  </form>
</div>

</div>)

}