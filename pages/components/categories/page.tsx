import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Categories = () => {
    return (
       
        <div className="container   shadow-sm sm:px-30 px-10 py-7 mx-auto flex justify-between items-center">
          <Link href='/'><h3 className='sm:text-xl  font-semibold text-slate-200 hover:text-slate-300'>All</h3></Link>
          <Link href='/'><h3 className='sm:text-xl  font-semibold text-slate-200 hover:text-slate-300'>Cables</h3></Link>
          <Link href='/'><h3 className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Charges</h3></Link>
          <Link href='/'> <h3 className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Baff</h3></Link>
          <Link href='/'> <h3 className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Headphones</h3></Link>
          <Link href='/'> <h3 className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Lights</h3></Link>
          <Link href='/'> <h3 className='sm:text-xl font-semibold text-slate-200 hover:text-slate-300'>Gaming</h3></Link>
           
        </div>
     
    );
  };
  
  export default Categories;