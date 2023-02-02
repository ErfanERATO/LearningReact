import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SubmiteForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState('');

  const firstNameHandler = (f) => {
    setfirstName(f.target.value);
  };

  const lastNameHandler = (l) => {
    setlastName(l.target.value);
  };

  const ageHandler = (a) => {
    setAge(a.target.value);
  };


  const submitHandler = (e) => {
    e.preventDefault();

    setUser(firstName + lastName + age);
    setfirstName("");
    setlastName("");
    setAge("");

    console.log({
      fname: firstName,
      lname: lastName,
      uage: age,
    });

  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <p>Please Insert your Information</p>

        <input placeholder="first name" onChange={firstNameHandler} />
        <p>your first name is: {firstName}</p>

        <input placeholder="last name" onChange={lastNameHandler} />
        <p>your last name is: {lastName}</p>

        <input placeholder="your age" onChange={ageHandler} />
        <p>your age is: {age}</p>

        <button type="submit">submit</button>

        <p>The User Info Is : {user}</p>

      </Form>
    </div>
  );
};

export default SubmiteForm;
