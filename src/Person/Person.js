import React from 'react';
import './Person.css';

// const person = () => {
//     return <p>im a person iam {Math.floor(Math.random()*30)}</p>
// };

const person = (props) => {
    return (
         <div className="Person">
        <p onClick={props.click}>im {props.name} and iam{props.age} </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
        

    )
    }

export default person;