import React from "react";
import classes from "./Person.css";

const person = (props) => { 
    return(
        <div className = {classes.name_cards}>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Gender : {props.gender}</p>
            <p>Hobby : {props.children}</p>
        <h1 className = "name_cards">header</h1>
        </div>
        
    )
};


export default person;