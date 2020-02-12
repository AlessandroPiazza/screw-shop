import React from 'react';

import { Container } from './styles';
import {MdLightbulbOutline } from 'react-icons/md'
export default function ThemeSwitcher({ toggleTheme } ) {
  return (
    <Container>
            <MdLightbulbOutline onClick={toggleTheme} size={36}  /> 
    </Container>
  );
}
