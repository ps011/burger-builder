import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]
const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: $ {props.price.toFixed(2)}</p>
            { controls.map(control => {
                return <BuildControl key={control.label} 
                                     label={control.label}
                                     addIngredient={() => {props.addIngredient(control.type)}}
                                     removeIngredient={() => {props.removeIngredient(control.type)}}
                                     disabled={props.disabled[control.type]}/>
            })
            }
            <button className={classes.OrderButton} onClick={props.clicked} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}
export default buildControls;