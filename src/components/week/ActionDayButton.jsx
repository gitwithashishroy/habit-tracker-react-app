import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { addHabitStatus , addWeeklyDoneStatus } from "../../action";
import styles from "../../styles/home.module.css";

const ActionDayButton = (props) => {
  const { habit , index } = props ;  

  const dispatch = useDispatch();

  const handleNoStatus = () => {
    const obj = {
      id : habit.id , 
      doneStatus : "" , 
      index : index 
    }
    dispatch(addWeeklyDoneStatus(obj))
  };

  const handleDoneStatus = () => {
    const obj = {
      id : habit.id , 
      doneStatus : "done" , 
      index : index 
    }
    dispatch(addWeeklyDoneStatus(obj))
  };

  const handleNotDoneStatus = () => {
    const obj = {
      id : habit.id , 
      doneStatus : "notdone" , 
      index : index 
    }
    dispatch(addWeeklyDoneStatus(obj))
  };

  return (
    <div className={styles.habitCardAction}>
      {habit.weekdays[index].doneStatus === "" && (
        <span className={styles.habitCardCheckIcon}>
          <i className="fa-regular fa-square" onClick={handleDoneStatus}></i>
        </span>
      )}

      {habit.weekdays[index].doneStatus === "done" && (
        <span className={styles.habitCardCheckIcon}>
          <i
            className="fa-solid fa-square-check"
            onClick={handleNotDoneStatus}
          ></i>
        </span>
      )}

      {habit.weekdays[index].doneStatus === "notdone" && (
        <span className={styles.habitCardCrossIcon}>
          <i class="fa-solid fa-square-xmark" onClick={handleNoStatus}></i>
        </span>
      )}
    </div>
  );
};

export default ActionDayButton;
