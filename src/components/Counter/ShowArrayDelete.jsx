import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

const ShowArrayDelete = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [userList, setUserList] = useState([]);

  const firstNameHandler = (f) => {
    setfirstName(f.target.value);
  };

  const lastNameHandler = (l) => {
    setlastName(l.target.value);
  };

  const ageHandler = (a) => {
    setAge(a.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setUserList([...userList, { firstName, lastName, age }]);
    setfirstName("");
    setlastName("");
    setAge("");
  };

  const deleteHandler = (d) => {
    const deleteUserList = [...userList];
    deleteUserList.splice(d, 1);
    setUserList(deleteUserList);
  };

  return (
    <div>
      <Form onSubmit={submitHandle}>
        <p>Please Insert your Information</p>

        <input placeholder="first name" onChange={firstNameHandler} />

        <input placeholder="last name" onChange={lastNameHandler} />

        <input placeholder="your age" onChange={ageHandler} />

        <button type="submit">add user</button>
      </Form>

      {userList.map((a, count) => (
        <div key={count}>
          <li>{a.firstName}</li>
          <li>{a.lastName}</li>
          <li>{a.age}</li>
          <button onClick={() => deleteHandler(a)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ShowArrayDelete;
