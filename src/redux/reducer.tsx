import { createSlice } from "@reduxjs/toolkit";

const initialState:any[] = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state:any, action:any) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state:any, action:any) => {
      return state.filter((item:any) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state:any, action:any) => {
      return state.map((todo:any) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state:any, action:any) => {
      return state.map((todo:any) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
