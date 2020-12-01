import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as Logo } from '../../assets/logo.png'; //act as component, works for svg
import Logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='logo'  className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
    </div>
  </div>
);

export default Header;
