import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import CartItemShown from "./CartItemShown";
import Model from "../UI/Model";

const CartItem = (props) => {
  const cartctx = useContext(CartContext);

  const cartitems = cartctx.items.map((item) => (
    <CartItemShown
      key={item.id}
      title={item.title}
      price={item.price}
      image={item.image}
      quantity={item.quantity}
      remove={item.id}
    ></CartItemShown>
  ));
  const totalamount = cartctx.totalamount.toFixed(2);
  return (
    <Model onClick={props.hide} style={{ position: "Fixed" }}>
      {/* <div style={{display:'flex',maxHeight:'4rem'}}>
      <button onClick={props.hide} >Close</button>
      <h4 style={{marginLeft:'15rem'}}>Total Amount:{totalamount}</h4>
      <button style={{marginLeft:'5rem',maxheight:'0.5rem'}}>Add Purchase</button>
      
      
      </div> */}

      <table border={1}>
        <thead >
          <tr >
            <th colSpan={2} align="center" onClick={props.hide} style={{ color: "white", background: "brown", padding: "1rem", cursor: "pointer" }}>Close</th>

            <th colSpan={2} align="center">Total Amount:{totalamount}</th>

            <th align="center" rowSpan={2}>Remove Quantity</th>
          </tr>

          <tr>
            <th align="center">Title</th>
            <th align="center">Color Image</th>
            <th align="center" >Quantity</th>
            <th align="center">Price</th>
            
          </tr>
        </thead>
        <tbody >{cartitems}</tbody>
      </table>
    </Model>
  );
};

export default CartItem;
