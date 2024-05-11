import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Image from 'next/image';
const Header = (props) => {
  const count = useSelector((state: RootState) => state.cart.cart)
    return (
        <nav className="py-6 border-b-1 border-violet-900 shadow-md">
        <div className="container px-28 mx-auto flex justify-between items-center">
          <div>
            <Link href="/" className="text-white text-lg font-semibold">
              <img alt="" style={{width:150,height:60}} src="https://res.cloudinary.com/dzkx1z6lo/image/upload/v1715429475/cp-removebg-preview_wggt2y.png" />
            </Link>
          </div>
          <div className="flex items-center">
            
            {/* Add more navigation links as needed */}
            <Link  href="/panier" style={{ position: 'relative' }} className="bg-white text-gray-800 rounded-full p-2">
            <FaShoppingCart />
            <span
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-19px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '100%',
            paddingBottom: '4px',
            paddingTop:'4px',
      
            paddingRight:'10px', 
            paddingLeft:'10px',   
            fontSize: '14px',
          }}
        >
          {count.length}
        </span>
            </Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Header;