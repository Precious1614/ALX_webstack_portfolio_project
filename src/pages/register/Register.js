import React, { useState } from "react";
import ImageSpace from "../../images/multitask-business.webp";
import "../../component/todo/todo.css";

const Register = () => {
  const [inputFullname, setInputFullname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!inputFullname || !inputEmail || !inputPassword) {
      alert("Kindly input your details");
    } else {
      const user = {
        fullname: inputFullname,
        email: inputEmail,
        password: inputPassword,
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration successful. Please sign in.");
      window.location.href = "/signin";
    }

    setInputFullname("");
    setInputEmail("");
    setInputPassword("");
  }

  return (
    <div>
      <div className="aa-showcase">
        <div className="aa_register-box">
          <div className="aa_showcase-left">
            <img className="image" src={ImageSpace} alt="" />
          </div>
          <div className="register-cont-right">
            <div className="card-cont">
              <h2>Register your account</h2>
              <form className="register-form-card" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name=""
                  id="myFullname"
                  placeholder="Fullname"
                  value={inputFullname}
                  onChange={(e) => setInputFullname(e.target.value)}
                />
                <input
                  type="email"
                  name=""
                  id="myEmail"
                  placeholder="Email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
                <input
                  type="password"
                  name=""
                  id="myPassword"
                  placeholder="Password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                />
                <button className="save-btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
