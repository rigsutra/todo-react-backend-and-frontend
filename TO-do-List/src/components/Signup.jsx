import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/Signup", {
        Username,
        email,
        password,
        confirmPassword,
      })
      .then((response) => {
        if (response.data.success == true) {
          console.log(response.data.message);
          navigate("/Signin");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="signup-container">
      <form className="sign-up-form" onSubmit={handleClick}>
        <div className="SignUp">
          <h3 className="Signup-name">SignUp</h3>
          <div className="line"></div>

          <label htmlFor="Username">Username</label>
          <input
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />

          <label htmlFor="email">Email</label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <label htmlFor="password">Password</label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />

          <label htmlFor="password">confirmPassword</label>

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Repassword"
          />

          <div>
            <button type="submit">Sign up</button>
          </div>

          <p>
            Already have an Account? <Link to="/signin">SignIn</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;

