import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const H3 = styled.h3`
    font-size: 1em;
    margin: 1em;
    float: right;
`

const Sign = props => (
    <Link to={props.link}>
        <H3>{props.text}</H3>
    </Link>
)

export default Sign;