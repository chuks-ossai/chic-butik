import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss';
import { auth } from '../../firebase/firebase.utils';

const HeaderComponent = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src="../../logo.png" alt="Logo" height="90px" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default HeaderComponent