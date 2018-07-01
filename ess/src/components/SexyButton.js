import React from 'react';
import { Link } from "react-router-dom";

const SexyButton = props => (
    <Link to={props.link}>
        <button style={{
            width: `300px`,
            backgroundColor: `black`,
            color: `white`,
            textAlign: `center`,
            border: `white 1px solid`,
            padding: `10px`,
            position: `absolute`,
            top: `${props.top}`,
            left: `${props.left}`
        }}> 
            <strong>
                {props.text} 
            </strong>
        </button>
    </Link>
)

export default SexyButton;