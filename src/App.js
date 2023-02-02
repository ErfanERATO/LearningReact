import React, { useState } from "react";
import Counter from "./components/Counter/Counter";
import UserForm from "./components/Counter/UserForm";
import SubmiteForm from "./components/Counter/SubmitForm";
import ShowArray from "./components/Counter/ShowArray";

function App() {


  return (
    <div className="App">
      
      <Counter />
      <div>_________________________</div>
      <UserForm />
      <div>_________________________</div>
      <SubmiteForm />
      <div>_________________________</div>
      <ShowArray />
      
    </div>
  );
}

export default App;
