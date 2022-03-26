import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
    removeTodo: (id: any) => dispatch(removeTodos(id)),
    updateTodo: (obj: any) => dispatch(updateTodos(obj)),
    completeTodo: (id: any) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props: any) => {
  const [sort, setSort] = useState<any>("all");
  
  return (
    <div className="displaytodos">
      {props.todos.length > 0 ? (
        <div className="buttons">
            {
            sort === "all" ? 
              <button className="active" onClick={() => setSort("all")}>All</button> : 
              <button onClick={() => setSort("all")}>All</button>
            }
            {
            sort === "active" ? 
              <button className="active" onClick={() => setSort("active")}>Active</button> : 
              <button onClick={() => setSort("active")}>Active</button>
            }
            {
              sort === "completed" ? 
              <button className="active" onClick={() => setSort("completed")}>Completed</button> : 
              <button onClick={() => setSort("completed")}>Completed</button>
            }
        </div>
      ) : null}
      <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item: any) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item: any) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item: any) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
