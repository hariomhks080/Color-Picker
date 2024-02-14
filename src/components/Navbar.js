import React,{useContext} from 'react';
import classes from './Navbar.module.css'
import Cart from './Cart/Cart';
import CartContext from '../Store/Cart-context';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  const cartctx = useContext(CartContext);
  let quantity=0;
  cartctx.items.map((item)=>(
     quantity=quantity+item.quantity
  ))
  return (
   

   
    <div className={classes.nav}>
        <li className={classes.li1}><Link  to='/' >Home</Link></li>
        <li className={classes.li2}><Link  to='/Store'>Store</Link></li>
      <li className={classes.li3}><Link to='/About'>About</Link></li>
      <div style={{ display: "flex" }}>
        <Cart shown={props.shown}></Cart>
        <h4 >{quantity}</h4>
       
      </div>
        
        
      </div>
   
  )
}

export default Navbar