import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";

const Products = () => {
  
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return <div>Products</div>;
};

export default Products;
