import React from 'react';
import { Link } from 'react-router-dom'
// import HomePage from '../pages/homepage/homepage.js';
// import HatsPage from '../pages/homepage/homepage.js';


const NavBar = () => (
  <div>
  		<Link to='/'>Home</Link>
  		<Link to='/shop'>Shop</Link>
  		<Link to='/contact'>Contact</Link>
  </div>
);

export default NavBar



