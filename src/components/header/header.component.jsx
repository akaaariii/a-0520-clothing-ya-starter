import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { ReactComponent as Logo } from '../../assets/logo.png'; //act as component, works for svg
import Logo from '../../assets/logo.png';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';

// import './header.styles.scss';

import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => {
  return(
  <HeaderContainer>
    <LogoContainer to='/'>
      <img src={Logo} alt='logo'  className='logo' />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      {
        currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ): (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )
      }
      <CartIcon />
      {
        hidden ? null : <CartDropdown />
      }
    </OptionContainer>
  </HeaderContainer>
)};

// const mapStateToProps = ({ cart : { hidden }}) => ({
//     hidden: hidden
// })
const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
