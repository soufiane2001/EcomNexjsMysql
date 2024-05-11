import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addToCart } from '../../counterSlice';

const Card = (props:any) => {
  const count = useSelector((state: RootState) => state.cart.cart)
const dispatch = useDispatch()
const handleClick = () => {
  console.log(props.product)
  dispatch(addToCart(props.product));
};
    return (
        <div className=" w-62 mt-10 rounded-lg  sm:ml-10 rounded overflow-hidden shadow-lg">
       <div style={{backgroundColor:'white'}}>
        <img className="w-60 h-52" src={props.product.img} alt="Card image"/>
        <div   className="px-6 py-4">
          <div  className="text-xl mb-2">{props.product.intitule}</div>
          <p className="text-gray-700 text-xl">
          {props.product.price}DH
          </p>
        </div>
        <div className="px-6 pt-2 pb-2">
        
        <button type="button" onClick={handleClick}/*dispatch(addToCart(props.product)console.log(props.product*/ className=" bg-slate-800 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
        <FaShoppingCart />
  Add to Cart
</button>

        </div>
        </div>
      </div>
      
    );
  };
  
  export default Card;