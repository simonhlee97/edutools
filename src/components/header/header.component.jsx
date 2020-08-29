import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss';

import {createStructuredSelector} from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden}) => (
	<HeaderContainer>
	    <LogoContainer to='/'>
	      <Logo className='logo' />
	    </LogoContainer>
    <OptionsContainer>
		<OptionLink to='/shop'>
        	SHOP
		</OptionLink>
      
	      {currentUser ? (
	        <OptionLink onClick={() => auth.signOut()}>
	          SIGN OUT
	        </OptionLink>
	      ) : (
	        <OptionLink to='/signin'>
	          SIGN IN
	        </OptionLink>
      		)}
      		<CartIcon />
		</OptionsContainer>
    {  hidden ? null : <CartDropdown />  }
   	</HeaderContainer>
);

// destructure nested values in state
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);