import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { AddCircleOutline } from 'react-ionicons';

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: (obj: any) => dispatch(addTodos(obj)),
  };
};

const Todos = (props: any) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Please type to add task");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <input
        type="text"
        placeholder="Please type to add task..."
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <button
        className="add-btn"
        onClick={() => add()}
      >
        <AddCircleOutline
          color={'#fff'} 
          title={"Click to add task"}
        />
      </button>
      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
