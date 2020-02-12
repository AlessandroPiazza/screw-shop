import styled from 'styled-components';
import { darken, lighten } from 'polished'

export const Container = styled.div`
 
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  Form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.theme.primary};
 
  align-items: center;
  padding: 50px;
  border-radius: 5px;
  /* border: solid 1px ;   */

    div{
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 5px;
      label {
        padding: 0 0 5px 0;
      }
    }

  h1 {
    padding: 5px 0px 30px 0px;
  }
  input {
      background: ${props => lighten(0.10, props.theme.theme.head )};
      border: 0;
      border-radius: 4px;
      height: 44px;
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
      background: #279AF1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#279AF1')}
      }
    }
`;