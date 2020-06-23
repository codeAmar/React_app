import React from "react";


const userOutput = (props) => {
    let style = {
        padding : '10px',
        margin: '10px auto',
        maxWidth: '10%',
        backgroundColor : 'orange'
    }
    return(
        <div style = {style}>
            <p>Username : {props.username}</p>
            <p>My Name is : {props.name}</p>
        </div>
    );
}

export default userOutput;