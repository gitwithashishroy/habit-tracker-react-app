import React from 'react' ; 
import { Link } from 'react-router-dom';
import styles from '../../styles/topnav.module.css' ; 

const TopNav = () => {
  const d = new Date();
  const d1 = d.toDateString() ; 


  return (
    <div className={styles.topnav}>   
        <div className={styles.navLeft}>
          <div className={styles.navLeftElem}>
            <Link className={styles.decorationLogo} to='/'> Habit Tracker React </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/'> Home  </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/weekly'> Weekly </Link>
          </div>
        </div>

        <div className={styles.navRightElem}>
          {`${d1}`}
        </div>
    </div>
  )
}

export default TopNav ; 