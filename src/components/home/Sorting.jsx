import React from "react";

const Sorting = () => {
  return (
    <div>
      <div className='bg-gray-100 my-5 p-5 flex items-center justify-end '>
        <select className='bg-white px-5 py-3' name='' id=''>
          <option disabled value=''>
            Select
          </option>
          <option value='high'>High Price</option>
          <option value='low'>Low Price</option>
        </select>
      </div>
    </div>
  );
};

export default Sorting;
