import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.theme.color};
    div{
        padding: 20px;
        border:1px solid #040F0F;
        display: flex;
        align-items: center;
        justify-content: start;
        background: ${props => lighten(0.01, props.theme.theme.background )};
    }
    section {
        min-height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        span{
                align-self:flex-end;
                font-size: 34px;
            }
        div {
            display: flex;
            flex-direction: column;
            border: none;
            width: 250px;
            p {
                align-self: flex-start;
            }
            input {
                background: #eee;
                border: 0;
                border-radius: 4px;
                height: 24px;
                padding: 0 15px;
                color: #000;
                margin: 0 0 10px;
                    &::placeholder{
                    color: rgba(0,0,0, 0.5);
                }
            }
            button{
                margin: 5px;
                text-align: center;
                padding: 10px;
                width: 100%;
                background: ${props => props.theme.theme.primary};
                color: #fff;
                border: 0;
                border-radius: 4px;
                overflow: hidden;
                margin-top: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.2s;
                span{
                    align-self:flex-end;
                    font-size: 16px;
                }
                
                
                
                &:hover {
                    background: ${props => darken(0.1, props.theme.theme.primary )}
                }

            }
        }
    }
    img {
        padding: 20px;
        margin: 10px;
        width: 350px;
        height: 350px;
        background: white;
    }
`;
