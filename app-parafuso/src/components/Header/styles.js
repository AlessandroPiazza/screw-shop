import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  top: 1;
  background: #FFC628;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
    p {
      font-size: 24px;
    }
  }
`;

export const NewScrew = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-right: 10px;
  color: #232323;
  &:hover {
    opacity: 0.7;
  }
  strong {
    display: block;
    color: #232323;
  }
`;

export const Search = styled(Link) `
    padding: 20px;
    color: #232323;
    text-decoration: none;
    transition: opacity 0.2s;
    svg {
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
    &:hover {
      opacity: 0.7;
  }
  `;


export const Home = styled(Link) `
padding: 20px;
    color: #232323;
    text-decoration: none;
    transition: opacity 0.2s;
    button{
      background: #FFC628;
      border: none;
      div {
        border-radius: 2px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
      }
        .bar1 {
        width: 50px;
      }
      .bar2 {
        width: 35px;
      }
      .bar3 {
        width: 25px;
      }
    }

    &:hover {
      opacity: 0.9;
      .bar2 {
        width: 50px;
      }
      .bar3 {
        width: 50px;
      }
  }
`;

export const Switcher = styled.div `


`;
