import React from 'react'
import { LuMenu } from "react-icons/lu";
import classes from "./Header.module.css"
function Lowerheder () {
  return (
    <div className ={classes.lower_container}>
        <ul> 
       
          <li> <LuMenu /> 
          <p> All </p></li> 
          
          <li> Today's Deals</li> 
          <li> Costumer Service</li> 
          <li>Registery </li> 
        
          <li> Gift Cards</li> 
        </ul>

        </div>
  )
}

export default Lowerheder