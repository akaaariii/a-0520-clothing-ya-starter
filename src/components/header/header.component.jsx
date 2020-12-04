import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { ReactComponent as Logo } from '../../assets/logo.png'; //act as component, works for svg
import Logo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='logo'  className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ): (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )
      }
      <CartIcon />
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  </div>
);

const mapStateToProps = ({ cart : { hidden }}) => ({
  hidden: hidden
})

export default connect(mapStateToProps)(Header);
