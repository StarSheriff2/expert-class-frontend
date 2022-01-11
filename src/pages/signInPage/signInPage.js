import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, Redirect } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import styles from './signInPage.module.scss';
import {
  loginUser, loggedInStatus, authErrors, resetError,
} from '../../auth/sessionSlice';
import FlashMessage from '../../components/flashMessage/flashMessage';

function SignInPage() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(loggedInStatus);
  const error = useSelector(authErrors);
  const history = useHistory();
  const location = useLocation();
  const redirectPath = location.state?.from || 'classes';
  const initialFormMessage = { message: '', display: false, type: null };

  const [formData, setFormData] = useState({ username: '' });
  const [formMessage, setFormMessage] = useState(initialFormMessage);

  if (loggedIn) {
    return (<Redirect to="classes" />);
  }

  useEffect(() => {
    let timeoutActive = true;
    if (error) {
      setFormMessage({ message: error, display: true, type: 'alert' });
      setTimeout(() => {
        if (timeoutActive) {
          setFormMessage(initialFormMessage);
        }
      }, 4000);
    }
    return () => {
      timeoutActive = false;
      setFormMessage(initialFormMessage);
      dispatch(resetError());
    };
  }, [error]);

  const change = (e) => setFormData({ ...formData, username: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(loginUser(formData.username));
      const originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult.status === 'created') {
        history.replace(redirectPath);
      }
    } catch (rejectedValueOrSerializedError) {
      history.replace('/');
    }
  };

  return (
    <div className="page-container">
      { formMessage.display
      && <FlashMessage message={formMessage.message} type={formMessage.type} /> }

      <div className={styles.innerContainer}>
        <h2 className={styles.title}>Sign In</h2>

        <form className={styles.signInForm} onSubmit={handleSubmit}>
          <input
            onChange={change}
            type="text"
            name="username"
            value={formData.username}
            placeholder="username"
            required
          />
          <input className="button-white" type="submit" value="Sign in" />
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
