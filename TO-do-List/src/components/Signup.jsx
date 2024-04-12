import { useState } from "react";
import { Link } from "react-router-dom";
import Axiom from 'axios';

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleClick(e) {
    e.preventDefault(); // Correct typo and casing
    Axiom.post("https://localhost:3000/auth/Signup", input) // Use axios.post
      .then(response => {
        console.log(response.data);
        // Handle response or update UI as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error or update UI as needed
      });
  }
  return (
    <div className="signup-container">
      <form  >
        <div className="SignUp">
          <h3 className="Signup-name">SignUp</h3>
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
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              placeholder="Email"
            />

            <label htmlFor="password">Password</label>

            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="password"
            />
            <div>
              <button className="signInBtn" type="submit" onClick={handleClick}>
                Sign In
              </button>
            </div>
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
