import { ADD_HABIT, DELETE_HABIT, ADD_HABIT_STATUS, ADD_WEEKLY_DONE_STATUS } from "../action";

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  
  const d0 = new Date();
  const month0 = months[d0.getMonth()];
  const date0 = d0.getDate();

  var d1 = new Date(Date.now() - 864e5);
  const month1 = months[d1.getMonth()];
  const date1 = d1.getDate();

  var d2 = new Date(Date.now() - 2 * 864e5);
  const month2 = months[d2.getMonth()];
  const date2 = d2.getDate();

  var d3 = new Date(Date.now() - 3*864e5);
  const month3 = months[d3.getMonth()];
  const date3 = d3.getDate();

  var d4 = new Date(Date.now() - 4 * 864e5);
  const month4 = months[d4.getMonth()];
  const date4 = d4.getDate();

  var d5 = new Date(Date.now() -5*864e5);
  const month5 = months[d5.getMonth()];
  const date5 = d5.getDate();

  var d6 = new Date(Date.now() -6*864e5);
  const month6 = months[d6.getMonth()];
  const date6 = d6.getDate();

  const weekdays = [
       {
        day : `${date1} ${month1}` , 
        doneStatus : ""
       }, 

       {
        day : `${date2} ${month2}` , 
        doneStatus : ""
       }, 

       {
        day : `${date3} ${month3}` , 
        doneStatus : ""
       }, 

       {
        day : `${date4} ${month4}` , 
        doneStatus : ""
       }, 

       {
        day : `${date5} ${month5}` , 
        doneStatus : ""
       }, 

       {
        day : `${date6} ${month6}` , 
        doneStatus : ""
       }, 
  ] ; 


const initialHabitsState = {
  list: [
    {
      id: 1,
      name: "Workout",
      doneStatus: "",
      weekdays : weekdays , 
    },

    {
      id: 2,
      name: "Reading Book",
      doneStatus: "done",
      weekdays : weekdays , 
    } , 

    {
      id: 3,
      name: "Go To Gym",
      doneStatus: "notdone",
      weekdays : weekdays , 
    } , 

  ],
};

export function habitsReducer(state = initialHabitsState, action) {
  switch (action.type) {
    case ADD_HABIT:
      const { id, name } = action.payload;

      

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            name: name,
            weekdays : weekdays , 
            doneStatus: "",
          },
        ],
      };

    case DELETE_HABIT:
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case ADD_HABIT_STATUS:
      var updatedList = state.list.map((elem) =>
        elem.id === action.id
          ? { ...elem, doneStatus : action.doneStatus }
          : elem
      );

    return {
        ...state,
        list: updatedList,
      };

    case ADD_WEEKLY_DONE_STATUS:
    var updatedWeekdays = [] ;  
     state.list.map((elem) =>{
         if(elem.id === action.id){
              updatedWeekdays = elem.weekdays.map((item , index)=>(
                index === action.index
                ? { ...item, doneStatus : action.doneStatus }
                : item 
              ))
          }
      }
      );

      var updatedList2 = state.list.map((elem) =>
        elem.id === action.id
          ? { ...elem, weekdays: updatedWeekdays }
          : elem
      );

    //   console.log(updatedList2) ; 

      return {
        ...state,
        list : updatedList2 
      };

    default:
      return state;
  }
}
