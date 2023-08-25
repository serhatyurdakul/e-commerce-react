import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";

const NavbarRight = () => {
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center p-3 bg-gray-200 rounded-full px-5'>
        <input type='text' placeholder='Search'  className='bg-gray-200 outline-none' />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div className='relative'>
        <div className='absolute -top-5 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
          3
        </div>
        <BsBasket3 size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
