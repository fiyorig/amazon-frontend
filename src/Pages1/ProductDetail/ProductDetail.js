import React, { useEffect, useState } from "react";
import classes from "./ProductDetail. module.css";
import Layout from "../../Commponent/Layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoints";
import ProductCard from "../../Commponent/Product/ProductCard";
import Loader from "../../Commponent/Loaderspiner/Loader";

function ProductDetail() {
  const[product,setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false)
  const { Productid } = useParams()
 
  // const [isLoading, setisLoading] = useState (false)
  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${ProductUrl}/products/${Productid}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false)
      });
  }, [])

// console.log(product)
  return (
    <Layout>
      {isLoading? (<Loader/>) : (
         <ProductCard product={product}
         flex={true}
         renderDesc={true}/>
      )}
      
    </Layout>
  )
}

export default ProductDetail;
