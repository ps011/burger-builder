import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const getTotalPrice = () => {
    return (
      props.basePrice +
      props.meatPrice +
      props.cheesePrice +
      props.baconPrice +
      props.saladPrice
    );
  };
  return (
    <Aux>
      <p> Base Price: $ {props.basePrice} </p>
      <p> Cheese: $ {props.cheesePrice} </p>
      <p> Meat: $ {props.meatPrice} </p>
      <p> Bacon: $ {props.baconPrice} </p>
      <p> Salad: $ {props.saladPrice} </p>
      <h1> Total Price: $ {getTotalPrice()} </h1>
      <Button type="Danger" clicked={props.purchaseCancel}> Cancel </Button> 
      <Button type="Success" clicked={props.purchaseContinue}>Order</Button>
    </Aux>
  );
};

export default orderSummary;
