import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../Commponent/Layout/layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoints";
import ProductCard from "../../Commponent/Product/ProductCard";
// import Loader from "../../Commponent/Loaderspiner/Loader"
function Results() {
  const [Results, setResults] = useState([]);
  const {CategoryName} = useParams();
  useEffect(() => {
    axios.get(`${ProductUrl}/Products/category/${CategoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}> catagory/ {CategoryName} </p>
        <hr />

        
        <div className={classes.product_container}>
          {Results?.map((Product) => (
            <ProductCard key={Product.id}
            renderAdd={true}
             product={Product} />
          ))}
        </div>
        {/* )} */}
      </section>
    </Layout>
  );
};

export default Results;
