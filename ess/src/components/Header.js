import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = props => (
    <Wrapper>
        <Title>
            Title
        </Title>
        <h3>{props.signin}</h3>
        <h3>{props.signout}</h3>
    </Wrapper>
)

export default Header;