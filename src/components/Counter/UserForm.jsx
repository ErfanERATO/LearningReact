import React, { useState } from "react";

const UserForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);

  const firstNameHandler = (f) => {
    setfirstName(f.target.value);
  };

  const lastNameHandler = (l) => {
    setlastName(l.target.value);
  };

  const ageHandler = (a) => {
    setAge(a.target.value);
  };


  return (
    <div>
      <p>Please Insert your Information</p>

      <input placeholder="first name" onChange={firstNameHandler} />
      <p>your first name is: {firstName}</p>

      <input placeholder="last name" onChange={lastNameHandler} />
      <p>your last name is: {lastName}</p>

      <input placeholder="your age" onChange={ageHandler} />
      <p>your age is: {age}</p>

    </div>
  );
};

export default UserForm;
