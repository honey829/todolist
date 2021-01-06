import React from "react";

const ToDoList = (props) => {
  const check = (id) => {
    if (
      document.getElementById(id) !== null &&
      document.getElementById(id).style.textDecorationLine !== "line-through"
    )
      document.getElementById(id).style.textDecorationLine = "line-through";
    else {
      document.getElementById(id).style.textDecorationLine = "none";
    }
  };

  return (
    <>
      <li className="collection-item cursor custom-li ">
        <i onClick={() => check(props.id)} className="fa fa-check left"></i>

        <label className="task-text" id={props.id}>
          {props.text}
        </label>
        <i
          onClick={() => props.onSelect(props.id)}
          className="fa fa-times right"
        ></i>
      </li>
    </>
  );
};
export default ToDoList;
