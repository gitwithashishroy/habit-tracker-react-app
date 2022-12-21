import React from 'react';
import styles from "../../styles/weekly.module.css";

const SingleDay = (props) => {
  const { day } = props ;
  console.log(day) ; 
  return (
    <div className={styles.singleDate}>
          <span> {day.day} </span>{" "}
          <span>
            {" "}
          </span>{" "}
    </div>
  )
}

export default SingleDay ;