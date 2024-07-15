import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./component/todo/Todo";
import Register from "./pages/register/Register";
import SignIn from "./pages/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
