import styled from 'styled-components';

import { darken, lighten } from 'polished';

export const ProductList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: ${props => props.theme.theme.color};
  ul{
      width: 100%;
      align-self: center;
    li {
        margin: 0 auto;
        float: left;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        background: ${props => lighten(0.01, props.theme.theme.background )};
        border:1px solid #040F0F;
        
        padding: 20px;
        max-width: 350px;      
        img {
            align-self: center;
            max-width: 250px;
            min-height: 250px;
            max-height: 250px;
            background: white;
        }
        
        > strong {
            bottom: 0;
            font-size: 16px;
            line-height: 20px;
        
            margin-top: 5px;
        }

        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        a {
            background: ${props => props.theme.theme.primary};
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;
            
            &:hover {
                background: ${props => darken(0.1, props.theme.theme.primary )}
            }


            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0 ,0 ,0 ,0.1);

                svg {
                    margin-right: 5px;
                }
                
            }
            span{
                
                flex: 1;
                font-weight: bold;
                text-align: center;
            }
            
        }

    }
  }
`;
