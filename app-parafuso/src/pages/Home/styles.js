import styled from 'styled-components';

import { darken, lighten } from 'polished';

export const ProductList = styled.div`
  width: 100%;
  background: #F7F7F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: #232323;

  .title{
    padding: 20px 0 20px 0;
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  a{

  }
  ul{
      width: 700px;
      display: grid;
      grid-template-columns: repeat(4,1fr);
      grid-gap: 20px;
      list-style: none;
    li {
      height: 200px;
      width: 150px;
      background: #FFFFFF;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      button {
        background: #232323;
        border: none;
        height: 100%;
        width: 100%;
        border-radius: 25px;
        transition: 2s;
        &:hover{
          background: ${lighten(0.2, '#232323')};
        }
        h1{
          color: #FDFDFD;
          font-size: 76px;
        }
      }
      img{
        width: 75px;
        height: 75px;

      }
      div{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 200px;
        width: 150px;
        border-radius: 25px;
        background: rgba(255,198,40,.8);
        transform: scaleY(0);
        transition: transform .5s;
        svg{
          color: white;
        }
      }
      &:hover div{
        transform: scaleY(1);
      }
    }
  }
`;
