import React from 'react' ; 
import { Link } from 'react-router-dom';
import styles from '../../styles/topnav.module.css' ; 

const TopNav = () => {
  return (
    <div className={styles.topnav}>   
        <ul>
          <li>
            <Link className={styles.decorationLogo} to='/'> Habit Tracker React </Link>
          </li>

          <li>
            <Link className={styles.decoration} to='/'>Home  </Link>
          </li>

          <li>
            <Link className={styles.decoration} to='/weekly'> Weekly </Link>
          </li>
        </ul>
    </div>
  )
}

export default TopNav ; 