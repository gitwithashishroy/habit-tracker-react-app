import React from "react";
import { useSelector , useDispatch } from "react-redux";
import styles from '../../styles/weekly.module.css' ; 
import WeeklyCard from "./WeeklyCard";

const Weekly = () => {
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  
  return (
    <div className={styles.container}>
     { habits.list.map((habit , index)=>(
          <WeeklyCard habit={habit} key={index}   />
        ))
     }
    </div>
  );
};

export default Weekly;
