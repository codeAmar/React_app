import React from 'react';
import classes from './Button.css';

const Button = (props) =>{
    return(
        <button 
        className = {classes.Button}
        onClick = {props.btnHandler}>
        DropDown
        </button>
    )
}


export default Button;