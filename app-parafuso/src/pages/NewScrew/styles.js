import styled from 'styled-components';
import { darken, lighten } from 'polished'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.hexagono {
  display: flex;
  justify-content: center;
  align-items: center;
   width: 200px;
   height: 110px;
   background: #FFFF;
   position: relative;
   margin: 0 0 50px 0;
  border-radius: 5px;

   }

.hexagono:before {
   width: 0;
   height: 0;
   content: "";
   position: absolute;
   top: -50px;
   left: 0;
   border-left: 100px solid transparent;
   border-right: 100px solid transparent;
   border-bottom: 50px solid #FFFF;

}

.hexagono:after {
   width: 0;
   height: 0;
   content: "";
   position: absolute;
   bottom: -50px;
   left: 0;
   border-left: 100px solid transparent;
   border-right: 100px solid transparent;
   border-top: 50px solid #FFFF;
}
img{
  width: 125px;
  height: 125px;
}
form{
  margin: 5px;
  font-style: bold;
  button{
    border: none;
    color: white;
    margin: 0 5px;
    float: right;
    text-align: center;
    width: 150px;
    padding: 7px 0px;
    border-radius: 20px;
  }
  .save{
      background: #99DD4E;
    }
    .add{
      background: black;
    }
    .remove{
      background: #E2000B;
    }
  div{
    background: white;
    margin: 5px 0 5px 0;
    padding: 10px 10px 10px 30px;
    overflow: hidden;
    border-radius: 10px;
    label{
      position:absolute;
      }
    input{
      padding-left: 150px;
      border: none;
      color: #DFDFE1;
      width: 700px;
    }

  }
}
`;
