import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
    width: 100%;
    background: ${props => props.theme.theme.head};
    text-align: right;
    padding: 20px;
    color: ${props => props.theme.theme.color};
    text-decoration: none;
    margin-bottom: -20px;
      svg {
        transition: opacity 0.2s;
        &:hover {
        opacity: 0.7;
      }
  }
`;
