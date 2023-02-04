import React, { useState } from "react";
import AddToDo from "./AddToDo";

const ToDo = () => {
  const [newTodo, setNewTodo] = useState([]);

  const addNewOne = (newInput) => {
    setNewTodo([...newTodo, { newInput }]);
  };

  return (
    <div className="todosList">
      <div className="container">
        <AddToDo add={addNewOne} />

        <div className="d-flex flex-column align-items-center ">
          {/* <nav className="col-6 mb-3">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active font-weight-bold"
                id="nav-home-tab"
              >
                undone <span className="badge badge-secondary">9</span>
              </a>
              <a
                className="nav-item nav-link font-weight-bold"
                id="nav-profile-tab"
              >
                done <span className="badge badge-success">9</span>
              </a>
            </div>
          </nav> */}

          {newTodo.map((e, count) => (
            <div className="col-6 mb-2" key={count}>
              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>{e.newInput}</div>
                <div>
                  <button type="button" className="btn btn-info btn-sm">
                    edit
                  </button>
                  <button type="button" className="btn btn-danger btn-sm ml-1">
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
