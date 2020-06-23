import React from "react";


const userInput = (props) => {
    let style = {
        padding : '20px',
        margin: 'auto',
        backgroundColor : 'blue'
    }
    return(
        <div>
            <input style = {style} type="text" onChange ={props.click} value = {props.initialU} />
        </div>
    );
}

export default userInput;
