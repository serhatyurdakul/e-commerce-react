import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div>
      <div className='bg-gray-100 my-5 p-5 flex items-center justify-end '>
        <select
          onChange={(e) => setSort(e.target.value)}
          className='bg-white px-5 py-3'
          name=''
          id=''
        >
          <option value=''>Select</option>
          <option value='high'>High Price</option>
          <option value='low'>Low Price</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
