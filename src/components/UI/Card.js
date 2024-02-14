import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={classes.card} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", flexWrap: "wrap",alignContent:"center"}}>
      {props.children}
    </div>
  )
}

export default Card;