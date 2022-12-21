export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const ADD_HABIT_STATUS = "ADD_HABIT_STATUS";
export const ADD_WEEKLY_DONE_STATUS = "ADD_WEEKLY_DONE_STATUS";


//action creators

export function addHabit(name) {
  return {
    type: ADD_HABIT,
    payload: {
      id: Date.now() + Math.random(),
      name: name,
    },
  };
}

export function deleteHabit(id) {
  return {
    type: DELETE_HABIT,
    id,
  };
}

export function addHabitStatus(obj) {
  return {
    type: ADD_HABIT_STATUS,
    id: obj.id,
    doneStatus : obj.doneStatus,
  };
}

export function addWeeklyDoneStatus(obj) {
  return {
    type: ADD_WEEKLY_DONE_STATUS,
    id: obj.id,
    doneStatus : obj.doneStatus,
    index : obj.index 
  };
}

