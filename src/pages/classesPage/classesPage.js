import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../common/Carousel/Carousel';
import {
  fetchClassesData, currentClasses, classesStateStatus, classesErrorMessage,
} from './classesPageSlice';
import styles from './classesPage.module.scss';

const ClassesPage = () => {
  const dispatch = useDispatch();
  const classes = useSelector(currentClasses);
  const fetchStatus = useSelector(classesStateStatus);
  const errorMessage = useSelector(classesErrorMessage);

  useEffect(() => {
    if (fetchStatus === 'idle' || errorMessage === 'Error fetching data.') {
      dispatch(fetchClassesData());
    }
  }, []);

  return (
    (fetchStatus === 'fulfilled')
    && (
    <div className="private-page-container">
      <div className={styles.classesContentWrapper}>
        <h2 className={styles.heading}>Our Classes</h2>
        <p className={styles.subHeading}>
          Please browse through our
          wide selection of expert classes
        </p>
        <Carousel classes={classes} />
      </div>
    </div>
    )
  );
};

export default ClassesPage;
