import React from "react";
import "./Person.css";

const person = (props) => { 
    return(
        <div className = "name_cards">
            <p className = {props.colorp} onClick={props.click}>Name : {props.name}</p>
            <p className = {props.colorp} onClick={props.click}>Age : {props.age}</p>
            <p className = {props.colorp} onClick={props.click}>Gender : {props.gender}</p>
            <p className = {props.colorp} onClick={props.click}>Hobby : {props.children}</p>
        </div>
    )
};


export default person;