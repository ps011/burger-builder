import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom'
class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: null
  };
  componentDidMount() {
      if (this.props.history.location.ingredients && this.props.history.location.totalPrice) {
      this.setState({
          ingredients: this.props.history.location.ingredients,
          totalPrice: this.props.history.location.totalPrice
        })
      } else {
          this.props.history.replace('/')
      }
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
}
  render() {
    let checkoutSummary = null;
    if (this.state.ingredients) {
      checkoutSummary = 
      <CheckoutSummary 
      checkoutCancelled={this.checkoutCancelledHandler}
      checkoutContinue={this.checkoutContinueHandler}
      ingredients={this.state.ingredients}>
      </CheckoutSummary>;
    }

    return <div>
        <h1 style={{textAlign: 'center'}}>Hope this tastes well!</h1>
        {checkoutSummary}
        <Route path={this.props.match.path + '/contact-data'} 
        render={() => { return <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>}}/>
        </div>;
  }
}

export default Checkout;
