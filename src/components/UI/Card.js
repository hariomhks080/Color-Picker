import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={classes.card} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
      {props.children}
    </div>
  )
}

export default Card;