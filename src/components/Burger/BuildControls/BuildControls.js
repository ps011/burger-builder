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
            { controls.map(control => {
                return <BuildControl key={control.label} 
                                     label={control.label}
                                     addIngredient={props.addIngredient}
                                     removeIngredient={props.removeIngredient}/>
            })
            }
        </div>
    )
}
export default buildControls;