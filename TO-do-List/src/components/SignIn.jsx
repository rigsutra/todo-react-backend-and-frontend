import { useState } from "react";
import "./Signin.css";
import axios from "axios";

function SignIn() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/user/Signin", {
      email,
      password
     } )
     .then((response) => {
      console.log(response);
     })
     .catch((error) =>{
      console.log("error", error);
     } )

  };


  return (
    <div className="SignIn">
     
     
      <form action="" className="sign-in-form" onSubmit={handleSubmit} >
      <h3 className="SignIn-name">SignIn</h3>
      <div className="lineup"></div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

          <label htmlFor="passwoed">password</label>

          <input type="Password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />

          <button className="signInBtn" type="submit"> Sign In</button>

          <p>
            <a href="#">Forgotten Password?</a>
          </p>
        </div>
        <div>
          <div className="line"></div>
          <p>Doesn't have Account <a href="/Signup">Signup</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
