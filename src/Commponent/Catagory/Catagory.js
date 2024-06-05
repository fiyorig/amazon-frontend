import React from 'react'
import {Catagoryinfo} from "./Catagoryinfo";
import CatagoryCard from "./Catagorycard"
import classes from "./Catagory.module.css"
const Catagory = (data) => {
  return (
    <section className={classes.Catagory_container}>
      {Catagoryinfo.map((info,i)  => {
        return <CatagoryCard data={info} key={i} />;
      })}
    </section>
  );
}

export default Catagory