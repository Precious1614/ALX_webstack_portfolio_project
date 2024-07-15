import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSpace from "../../images/multitask-business.webp";
import "../../component/todo/todo.css"; // Adjust the path as necessary

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !email || !password) {
      alert("Kindly, input your details");
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ fullname, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful");
      navigate("/");
    }
  };

  return (
    <div className="aa-showcase">
      <div className="aa_register-box">
        <div className="aa_showcase-left">
          <img className="image" src={ImageSpace} alt="" />
        </div>
        <div className="register-cont-right">
          <div className="card-cont">
            <h2>Register</h2>
            <form className="register-form-card" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
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
              <button type="submit" className="save-btn">Register</button>
            </form>
            <p>
              Already have an account? <a href="/">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
