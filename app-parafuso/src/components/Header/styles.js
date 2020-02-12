import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  top: 1;
  background: ${props => props.theme.theme.head};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 50px 0;
  height: 100px;
  width: 100%;
  div {
    display: flex;
    
  
  }
`;

export const NewScrew = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-right: 10px;
  color: ${props => props.theme.theme.color};
  &:hover {
    opacity: 0.7;
  }
  strong {
    display: block;
    color: ${props => props.theme.theme.color};
  }
`;

export const Back = styled(Link) `
    padding: 20px;
    color: ${props => props.theme.theme.color};
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
  }
  `;


export const Home = styled(Link) `
    margin-bottom: 50px;
    padding: 20px;
    color: ${props => props.theme.theme.color};
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
  }
`;

export const Switcher = styled.div `
    

`;
