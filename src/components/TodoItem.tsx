import React, { useRef } from "react";
import { CloseOutline, PencilOutline, CheckmarkDoneOutline } from 'react-ionicons';

const TodoItem = (props:any) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef<any>(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id:number, value:any, e:any) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button
          onClick={() => changeFocus()}
        >
          {" "}
          <PencilOutline
          color={'#000000'} 
          title={"Edit task"}
        />
          {" "}
        </button>
        {item.completed === false && (
          <button
            onClick={() => completeTodo(item.id)}
          >
            <CheckmarkDoneOutline
              color={'#000000'} 
              title={"Mark as complete"}
            />
          </button>
        )}
        <button
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <CloseOutline
            color={'#000000'} 
            title={"Remove task"}
          />
        </button>{" "}
      </div>
      {item.completed && <span className="completed">Done</span>}
    </li>
  );
};

export default TodoItem;
