import styled from 'styled-components';
import { darken, lighten } from 'polished'

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  
  Form {
  color: ${props => props.theme.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  h1 {
    padding: 5px 0px 30px 0px;
  }
  input {
      
      background: ${props => lighten(0.10, props.theme.theme.head )};
      border: 0;
      border-radius: 4px;
      height: 34px;
      padding: 0 15px;
      color: white;
      margin: 0 0 10px;
        &::placeholder{
        color: white;
      }
    }
    span{
      color: #F64C75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold
    }
  }
  button {
      text-align: center;
      cursor: pointer;
      margin: 5px 0 0;
      width: 100%;
      height: 44px;
      padding: 10px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#3b9eff')}
      }
    }
`;