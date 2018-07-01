import React from "react";
import styled from 'styled-components';

const Teaser = styled.section`
  border-radius: 10px;
  background: black;
  border: white 1px solid;
  position: relative;
  top: ${props => props.top};
  left: ${props => props.left};
  height: ${props => props.height};
  width: 300px;
`;

const Landing = () => (
    <div>
        <Teaser top={`100px`} left={`100px`} height={`300px`} />
    </div>
)

export default Landing;
