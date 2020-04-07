import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
            .map(igName => {
                return [...Array(props.ingredients[igName])].map((_, i) => {
                    return <BurgerIngredient key={igName + i} type={igName} />
                })
            })
            .reduce((sum, currentValue) => {
                    return sum.concat(currentValue)
            }, [])

            if (transformedIngredients.length === 0) {
                transformedIngredients = <p>Please Start Adding Ingredients</p>
            }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
    );
}

export default burger;