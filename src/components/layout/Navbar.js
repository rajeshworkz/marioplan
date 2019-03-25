import React from 'react';
import { Link  } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className='container'>
        <Link to='/' className='brand-name'>MarioPlan</Link>
        <SignInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default NavBar;
