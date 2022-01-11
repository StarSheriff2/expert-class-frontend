import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './mobileSignOutBtn.module.scss';
import { logoutUser } from '../../auth/sessionSlice';

const mobileSignOutBtn = () => {
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
    <button type="button" className={styles.logoutBtnMobile} onClick={handleLogoutClick}>
      <i className={`${styles.signOutIcon} fas fa-sign-out-alt`} aria-label="Signout button" />
    </button>
  );
};

export default mobileSignOutBtn;
