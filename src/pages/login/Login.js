import React, { useState } from "react";
import ImageSpace from "../../images/multitask-business.webp";
import "../../component/todo/todo.css";

const SignIn = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function handleSignIn(e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === inputEmail &&
      storedUser.password === inputPassword
    ) {
      alert("Sign in successful");
      window.location.href = "/todo";
    } else {
      alert("Invalid email or password");
    }
    setInputEmail("");
    setInputPassword("");
  }

  return (
    <div className="aa-showcase">
      <div className="aa_register-box">
        <div className="aa_showcase-left">
          <img className="image" src={ImageSpace} alt="" />
        </div>
        <div className="register-cont-right">
          <div className="card-cont">
            <h2>Sign in to your account</h2>
            <form className="register-form-card" onSubmit={handleSignIn}>
              <input
                type="email"
                name=""
                id="signInEmail"
                placeholder="Email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
              <input
                type="password"
                name=""
                id="signInPassword"
                placeholder="Password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <button className="save-btn">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
