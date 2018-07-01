import React from "react";

const Teaser2 = props =>(
    <div style={
    {borderRadius: `10px`,
    background: `black`,
    border: `white 1px solid`,
    position: `absolute`,
    width: `300px`,
    top: `${props.top}`,
    left: `${props.left}`,
    height: `${props.height}`}
} />
)

export default Teaser2;