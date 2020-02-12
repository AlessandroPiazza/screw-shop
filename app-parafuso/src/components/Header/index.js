import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { MdAddCircleOutline, MdExitToApp, MdHome } from 'react-icons/md'
import { Container, NewScrew, Home, Back } from './styles';


export default function Header() {
  const dispatch = useDispatch()
  function handlesSignOut() {
      dispatch(signOut());
  }


  return (
    <Container >
            <Home to="/home">
            <MdHome size={105}/>
            </Home>
            
            <div>
            <NewScrew to="/newScrew">
      
                  <strong>Novo parafuso</strong>
                  <MdAddCircleOutline size={36}/>
              
          </NewScrew>
          <Back to="/" onClick={handlesSignOut}>
          <MdExitToApp size={36}/>
          </Back>
          
          
          </div>
      </Container> 
  );
  
}
