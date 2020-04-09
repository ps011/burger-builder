import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
class BurgerBuilder extends Component {
    INGREDIENT_PRICES = {
        salad: 0.5,
        cheese: 0.7,
        meat: 1.7,
        bacon: 0.5
    }

    state = {
        ingredients: {
        cheese: 0,
        meat: 0,
        salad: 0,
        bacon: 0
        },
        totalPrice: 4,
        purchasable: false,
        showModal: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(ingredient => {
            return ingredients[ingredient]
        })
        .reduce((total, currentValue) => {
            return total + currentValue
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            const newCount = oldCount + 1
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = newCount;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + this.INGREDIENT_PRICES[type];
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
            this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount > 0 ? oldCount - 1 : 0;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - this.INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
}

purchaseCancelHandler = () => {
    this.setState({showModal: false})
}

purchaseContinueHandler = () => {
    alert('You Continue');
}

 orderNowHandler = () => {
     this.setState({showModal: true})
 }

    render () {
        const disabledInfo = { ...this.state.ingredients }
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
               { this.state.showModal ? <Modal show={this.state.showModal} modalClosed={this.purchaseCancelHandler}> 
                    <OrderSummary
                    basePrice={4}
                    meatPrice={this.state.ingredients.meat * this.INGREDIENT_PRICES.meat}
                    saladPrice={this.state.ingredients.salad * this.INGREDIENT_PRICES.salad}
                    baconPrice={this.state.ingredients.bacon * this.INGREDIENT_PRICES.bacon}
                    cheesePrice={this.state.ingredients.cheese * this.INGREDIENT_PRICES.cheese}
                    purchaseCancel={this.purchaseCancelHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    >
                    </OrderSummary>
                </Modal> : null }
              <Burger ingredients={this.state.ingredients}></Burger>    
              <BuildControls 
              clicked = {this.orderNowHandler}
              price={this.state.totalPrice}
              addIngredient={this.addIngredientHandler} 
              removeIngredient={this.removeIngredientHandler}
              disabled={disabledInfo}
              purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;