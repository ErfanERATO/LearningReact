import React, { useState } from "react";


const AddToDo = (props) => {

    const [newInput, setNewInput] = useState("");
    
  
    const inputHandler = (a) => {
      setNewInput(a.target.value);
    };
  
    const formHandler = (f) => {
      f.preventDefault();
      props.add(newInput);
      setNewInput("");
      
    };
  



    return (
        <section className="jumbotron">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="jumbotron-heading">Welcome!</h1>
            <p className="lead text-muted">
              To get started, add some items to your list:
            </p>
            <form className="form-inline" onSubmit={formHandler}>
              <div className="form-group d-flex flex-row">
                <input
                  type="text"
                  className="form-control mx-sm-3"
                  placeholder="i want to do ..."
                  onChange={inputHandler}
                  value={newInput}
                />
                <button className="btn btn-primary" type="submit">
                  add
                </button>
              </div>
            </form>
          </div>
        </section>
    )
}

export default AddToDo;