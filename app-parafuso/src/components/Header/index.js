import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { MdAddCircleOutline, MdSearch, MdHome } from 'react-icons/md'
import { Container, NewScrew, Home, Search } from './styles';


export default function Header() {
  return (
    <Container >
      <div>
        <Home to="/home">
          <button>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>
        </Home>
        <p><strong>screw</strong>shop</p>
        <Search>
          <MdSearch size={36} />
        </Search>
      </div>
    </Container>
  );

}
