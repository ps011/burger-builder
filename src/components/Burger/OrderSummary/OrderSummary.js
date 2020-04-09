import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  componentDidUpdate () {
    console.log('Component Updated')
  }
  getTotalPrice = () => {
    return (
      this.props.basePrice +
      this.props.meatPrice +
      this.props.cheesePrice +
      this.props.baconPrice +
      this.props.saladPrice
    );
  };
  render () {
  return (
    <Aux>
      <p> Base Price: $ {this.props.basePrice} </p>
      <p> Cheese: $ {this.props.cheesePrice} </p>
      <p> Meat: $ {this.props.meatPrice} </p>
      <p> Bacon: $ {this.props.baconPrice} </p>
      <p> Salad: $ {this.props.saladPrice} </p>
      <h1> Total Price: $ {this.getTotalPrice()} </h1>
      <Button type="Danger" clicked={this.props.purchaseCancel}> Cancel </Button> 
      <Button type="Success" clicked={this.props.purchaseContinue}>Order</Button>
    </Aux>
  );
  }
};

export default OrderSummary;
