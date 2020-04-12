import React from "react";
import classes from "./Order.module.css";
const order = (props) => {
  return (
    <div className={classes.Order}>
         Ingredients: 
      {Object.keys(props.ingredients).map((ingredient) => {
        return (
          <p className={classes.SingleOrder}>
           {ingredient.toUpperCase()}({props.ingredients[ingredient]})
          </p>
        );
      })}
      <p>
        Price: <string>{props.price}</string>
      </p>
    </div>
  );
};

export default order;
