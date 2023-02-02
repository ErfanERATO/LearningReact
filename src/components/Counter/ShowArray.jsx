import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

const ShowArray = () => {
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

  return (
    <div>
      <Form onSubmit={submitHandle}>
        <p>Please Insert your Information</p>

        <input placeholder="first name" onChange={firstNameHandler} />
        <p>your first name is: {firstName}</p>

        <input placeholder="last name" onChange={lastNameHandler} />
        <p>your last name is: {lastName}</p>

        <input placeholder="your age" onChange={ageHandler} />
        <p>your age is: {age}</p>

        <button type="submit">add user</button>
      </Form>

      {userList.map((a , count) => (
        <div key={count}>
          <li>{a.firstName}</li>
          <li>{a.lastName}</li>
          <li>{a.age}</li>
        </div>
      ))}
    </div>
  );
};

export default ShowArray;
