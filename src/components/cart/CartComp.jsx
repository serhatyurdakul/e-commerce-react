import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className='my-10 flex items-center justify-between text-center'>
      <img className='w-[190px] h-[200px]' src={cart?.image} alt='' />
      <div className='w-[470px] my-2'>
        <div className='text-xl'>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='text-xl font-bold'>
        {cart?.price}$ ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className='bg-red-500 text-white w-[160px] rounded-lg h-14 text-xl flex items-center justify-center cursor-pointer'
      >
        Delete Product
      </div>
    </div>
  );
};

export default CartComp;
