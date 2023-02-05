import React, { useState } from "react";
import AddToDo from "./AddToDo";
import { v4 as uuidv4 } from 'uuid';

const ToDo = () => {
  const [newTodo, setNewTodo] = useState([]);
  const [editData , setEditData] = useState("")

  const addNewOneHandler = (newInput) => {
    setNewTodo([...newTodo, { newInput , id : uuidv4()}]);
  };


  const deleteTaskHandler = (id) => {
     let todo = newTodo.filter(task => task.id !== id)
     setNewTodo(todo);
  }


  const changeTask = (e) => {
    let newEntry = {
      id : editData.id,
      newInput : e.target.value,
    }
    setEditData(newEntry);
  }


  const updateTask = () => {
    let filterRecord = [...newTodo].filter(e => e.id !== editData.id);
    let updateObject = [...filterRecord, editData]
    setNewTodo(updateObject);
    setEditData('');
    console.log("edit");
  }


  const cancelUpdateHandler = () => {
    setEditData("");
  }

  return (
    <div className="todosList">
      <div className="container">
        <AddToDo add={addNewOneHandler} />

        <div className="d-flex flex-column align-items-center ">

        <div className="col-6 mb-2">
              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <input type="text" placeholder="Update" value={editData && editData.input} onChange={(e)=> changeTask(e)}/>
                {/* <input type="text" placeholder="Update" value={""} onChange={(e)=> changeTask(e)}/> */}
                <div>
                  <button type="button" className="btn btn-success btn-sm" onClick={updateTask}>
                    update
                  </button>
                  <button type="button" className="btn btn-danger btn-sm ml-1" onClick={cancelUpdateHandler}>
                    cancel
                  </button>
                </div>
              </div>
            </div>

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

          {newTodo.map((e, index) => (
            <div className="col-6 mb-2" key={e.id}>
              <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>{e.newInput}</div>
                <div>
                  <button type="button" className="btn btn-info btn-sm" onClick={()=> setEditData({id:e.id,input:e.newInput})}>
                    edit
                  </button>
                  <button type="button" className="btn btn-danger btn-sm ml-1" onClick={() => deleteTaskHandler(e.id)}>
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
