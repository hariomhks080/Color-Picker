import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  
  return (
  
        
        <button className={classes.button} onClick={props.shown}>Cart</button>
        
   
  )
}

export default Cart;