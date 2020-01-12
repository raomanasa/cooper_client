import React from "react";
const LoginForm = ({ submitFormHandler }) => {
    return (
      <form onSubmit={submitFormHandler} id="login-form">
        <h1>LOGIN FORM</h1>
        <label>EMAIL</label>
        <input name="email" type="email" id="email"></input>
  
        <label>Password</label>
        <input name="password" type="password" id="password"></input>
        <button id="Submit" className="button">Submit</button>
      </form>
    );
  };
  export default LoginForm;