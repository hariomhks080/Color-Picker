import React, { useContext } from "react";

import CartContext from "../../Store/Cart-context";

const InputForm = (props) => {
  const cartctx = useContext(CartContext);
  const submithandler = (event) => {
    event.preventDefault();
    const sumary = {
      id: Math.random().toString(),
      title: props.title,
      image: props.image,
      price: props.price,
      quantity: +1,
    };
    cartctx.additem(sumary);
  };

  return (
    <form onSubmit={submithandler} style={{ marginTop: "20px",border:"2px solid blue",padding:"2rem"}}>
      <img src={props.image} style={ {width:"90%"}} alt="hd" />
      <h2 style={{ textAlign: "center" }}>{props.title}</h2>

      <h6 style={{ textAlign: "center" }}>RS : {props.price}</h6>
      <div style={{ display: "flex", justifyContent: "center", width: "90%" }}>
        <button style={{ width: "90%",marginBottom:"10px" }} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default InputForm;
