import { useState } from "react";
import "./Signup.css";
import Axiom from 'axiom';

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function HandleClick(e) {
    e.preventdefault();
    Axiom.port("https://localhost:3000/auth/Signup",{input});
  }
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} action="">
        <div className="SignUp">
          <h3 className="SignUP-name">SignUp</h3>
          <div className="line"></div>
          <div className="Card">
            <label htmlFor="Username"> Username</label>
            <input
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Name"
            />

            <label htmlFor="email">Email</label>

            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.email]: e.target.value })
              }
              type="Email"
              placeholder="Email"
            />

            <label htmlFor="password">Password</label>

            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.password]: e.target.value })
              }
              type="Password"
              placeholder="password"
            />
            <div>
              <button className="signInBtn" onClick={HandleClick}>
                {" "}
                Sign In
              </button>
            </div>
          </div>
          <p>
            Already have an Account{" "}
            <a href="TO-do-List\src\components\SignIn.jsx">SignIn</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
