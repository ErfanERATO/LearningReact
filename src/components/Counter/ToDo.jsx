import React, { useState } from "react";
const ToDo = () => {
  const [newInput, setNewInput] = useState("");
  // const[newform, setNewForm] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  const inputHandler = (a) => {
    setNewInput(a.target.value);
  };

  const formHandler = (f) => {
    f.preventDefault();
    setNewInput("");
    setNewTodo([...newTodo, { newInput }]);
    console.log(newInput);
  };

  return (
    <div className="todosList">
      <div className="container">
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
                  value = {newInput}
                />
                <button className="btn btn-primary" type="submit">
                  add
                </button>
              </div>
            </form>
          </div>
        </section>
        <div className="d-flex flex-column align-items-center ">
          <nav className="col-6 mb-3">
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
          </nav>

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

          {/* <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
              <div>hello roocket</div>
              <div>
                <button type="button" className="btn btn-info btn-sm">
                  edit
                </button>
                <button type="button" className="btn btn-danger btn-sm ml-1">
                  delete
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
