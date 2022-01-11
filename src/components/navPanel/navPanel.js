import './navPanel.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { logoutUser } from '../../auth/sessionSlice';

function NavPanel() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = async () => {
    const resultAction = await dispatch(logoutUser());
    const originalPromiseResult = unwrapResult(resultAction);
    if (originalPromiseResult.logged_out) {
      history.replace('/');
    }
  };

  return (
    <>
      <nav className="nav-panel">
        <a href="/" className="reload-page-logo">Expert Class</a>
        <NavLink to="/classes" className="nav-link" activeClassName="active-nav-link" exact>
          Classes
        </NavLink>
        <NavLink to="/reserve" className="nav-link" activeClassName="active-nav-link" exact>
          Reserve
        </NavLink>
        <NavLink to="/reservations" className="nav-link" activeClassName="active-nav-link" exact>
          My Reservations
        </NavLink>
        <NavLink to="/add-class" className="nav-link" activeClassName="active-nav-link" exact>
          Add Class
        </NavLink>
        <NavLink to="/remove-class" className="nav-link" activeClassName="active-nav-link" exact>
          Remove Class
        </NavLink>
        <button type="button" className="button-white logOutBtn" onClick={handleLogoutClick}>Logout</button>
      </nav>
    </>
  );
}

export default NavPanel;
