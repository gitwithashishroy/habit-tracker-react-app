import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/weekly.module.css";
import ActionDayButton from "./ActionDayButton";
import SingleDay from "./SingleDay";

const WeeklyCard = (props) => {
  const { habit } = props;
  // console.log(habit);

  return (
    <div className={styles.weeklyCard}>
      <div className={styles.habitTitle}>
        <div className={styles.habitName}> {habit.name} </div>
      </div>
      <div className={styles.weeklyDate}>
        {habit.weekdays.map((item, index) => (
          <div className={styles.singleDay}>
            <SingleDay day={item} key={index} />
            <ActionDayButton habit={habit} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCard;
