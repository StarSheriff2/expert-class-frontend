import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './landingPage.module.scss';
import { loggedInStatus } from '../../auth/sessionSlice';

export default function LandingPage() {
  const loggedIn = useSelector(loggedInStatus);
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  if (loggedIn) {
    history.replace('classes');
  }

  return (
    <div className="page-container">
      <div className={styles.innerContainer}>
        <h1 className={styles.pageTitle}>OUR EXPERT CLASSES</h1>
        <p className={styles.caption}>
          There&apos;s Nothing Better Than Getting Better.
          Keep Growing With Unlimited Creative Classes.
          Grow Without Limits. Discover What You Can Create With Thousands of Inspiring Classes.
          Support of a Community.
          Prompts & Resources. Sign up Today.
        </p>

        <div className={styles.buttonsDiv}>
          <button className="button-green" type="button" onClick={() => handleClick('/sign-in')}>SignIn</button>
          <button className="button-white" type="button" onClick={() => handleClick('/sign-up')}>SignUp</button>
        </div>
      </div>
    </div>
  );
}
