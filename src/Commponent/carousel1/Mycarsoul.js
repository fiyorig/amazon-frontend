import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carous.module.css"
import { img } from "./imgcol/data";

function Carouselefect() {
  return (
    <div>
        <Carousel
          

   autoplay ={true}
infiniteLoop={true}
    showIndicators={false}
    showThumbs={false}>


{
img.map((imageItemLink,i)=>{
    return < img src={imageItemLink} key={i}/>
})
}


        </Carousel>
        <div className={classes.hero_img}></div>
    </div>);
}
  


export default Carouselefect