import { ADDTASK, COMPLETETASK, DELETETASK, EDIT, FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from "./actionTypes";

export const deleteTask = (id) => {
    return {
        type: DELETETASK,
        payload: id,
    };
}
export const addTask = (newTask) => {
    return {
        type: ADDTASK,
        payload: newTask,
    };
}
export const taskComplete = (id) => {
    return {
        type: COMPLETETASK,
        payload: id,
    }
}
export const editTask = (editedTask) => {
    return {
        type: EDIT,
        payload: editedTask,
    }
}

export const filterAll = (id) => {
    return {
        type: FILTER_ALL,
        payload: id
    }
}
export const filterDone = (id) => {
    return {
        type: FILTER_DONE,
        payload: id
    }
}
export const filterNotDone = (id) => {
    return {
        type: FILTER_NOT_DONE,
        payload: id
    }
}
