import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Categories = (props) => {
    return (
       
        <div className="container   shadow-sm sm:px-30 px-10 py-7 mx-auto flex justify-between items-center">
      <h3 onClick={()=>{props.changeType(0)}} className='sm:text-xl  font-semibold text-slate-200 hover:text-slate-300'>All</h3>
         <h3 onClick={()=>{props.changeType(1)}}  className='sm:text-xl  font-semibold text-slate-200 hover:text-slate-300'>Cables</h3>
         <h3 onClick={()=>{props.changeType(2)}}  className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Charges</h3>
       <h3 onClick={()=>{props.changeType(3)}}  className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Baff</h3>
           <h3 onClick={()=>{props.changeType(4)}}  className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Headphones</h3>
          <h3 onClick={()=>{props.changeType(5)}}  className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Lights</h3>
           <h3 onClick={()=>{props.changeType(6)}}  className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Gaming</h3>
           
        </div>
     
    );
  };
  
  export default Categories;