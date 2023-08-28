import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
  };
  return (
    <div className='flex gap-10 my-10'>
      <img
        className='w-[700px] h-[500px] object-contain'
        src={productDetail?.image}
        alt=''
      />
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-3 text-2xl'>{productDetail?.description}</div>
        <div className='text-lg font-bold text-red-500 my-2 '>
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className='text-lg font-bold text-red-500 my-2 '>
          Count : {productDetail?.rating?.count}
        </div>
        <div className='text-3xl font-bold'>
          {productDetail?.price}
          <span className='text-sm'>$</span>
        </div>
        <div className='flex items-center gap-5 my-4'>
          <div
            onClick={decrement}
            className='text-4xl font-bold cursor-pointer'
          >
            -
          </div>
          <input
            className=' w-12 text-center text-3xl font-bold'
            type='text'
            value={quantity}
          ></input>
          <div
            onClick={increment}
            className='text-4xl font-bold cursor-pointer'
          >
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className='my-4 border w-[200px] h-16 rounded-lg bg-gray-200 text-2xl flex items-center justify-center cursor-pointer'
        >
          Add Basket
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
