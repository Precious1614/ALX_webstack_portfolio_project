import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../component/todo/todo.css";
import ImageSpace from "../../images/multitask-business.webp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Sign in successful");
      navigate("/todo");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="aa-showcase">
      <div className="aa_register-box">
        <div className="aa_showcase-left">
          <img className="image" src={ImageSpace} alt="" />
        </div>
        <div className="register-cont-right">
          <h2>Sign In to Your Account</h2>
          <form className="register-form-card" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="save-btn">
              Sign In
            </button>
          </form>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
