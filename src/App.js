import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Counter/Header";
import ToDo from "./components/Counter/ToDo";
// import Counter from "./components/Counter/Counter";
// import UserForm from "./components/Counter/UserForm";
// import SubmiteForm from "./components/Counter/SubmitForm";
// import ShowArray from "./components/Counter/ShowArray";
// import ShowArrayDelete from "./components/Counter/ShowArrayDelete";
// import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ToDo />
      </main>
    </div>
  );
}

export default App;
