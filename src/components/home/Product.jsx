import React from "react";

const Product = ({ product }) => {
  return (
    <div className='w-[425px] p-2 ml-2 mb-2 border rounded-md relative cursor-pointer'>
      <div className='text-lg font-bold absolute rounded-md top-2 right-2 bg-gray-700 text-white p-1'>
        {product?.price} <span className='text-sm'>$</span>
      </div>
      <img className='w-[190px] h-[210px] m-auto' src={product?.image} alt='' />
      <div className='text-center px-3 mt-3 text-lg font-bold'>
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
