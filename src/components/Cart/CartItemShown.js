import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-context';

const CartItemShown = (props) => {
  const cartctx = useContext(CartContext)
  const submithandler=(event)=>{
    event.preventDefault();
    
    cartctx.removeitem(props.remove)
    
  }
  return (
    <tr>
     
      <td align="center">{props.title}</td>
      
      <td align="center"><img src={props.image} alt='hd' style={{  maxHeight: '5rem', width: '90%',  }} /></td>
      <td align="center" >{props.quantity}</td>
      <td align="center">Rs:{props.price}</td>
     
      <td align="center"  ><button onClick={submithandler}  style={{ color: "white", background: "brown",padding:"1rem",cursor:"pointer" }}>Remove</button></td> 
          </tr>
    // <div>
    /* <hr></hr>
    <form style={{display:'flex',}} onSubmit={submithandler}>
    
      
    <li style={{marginTop:'1.5rem',marginLeft:'1rem'}}>{props.title}</li>
  
    <img src={props.image} alt='hd' style={{marginTop:'0.5rem',maxHeight:'5rem',width:'10rem',marginLeft:'3rem'}}/>

    <div style={{marginTop:'1.5rem',marginLeft:'5rem'}}>{props.quantity}</div>
    
    <li style={{marginTop:'1.5rem',marginLeft:'7rem'}}>Rs:{props.price} </li>
    <button type='submit' style={{color:'red'}} >Remove</button>
    </form>
    <hr></hr>
    </div> */
  )
}

export default CartItemShown