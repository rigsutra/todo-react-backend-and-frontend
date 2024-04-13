import "./Signin.css";

function SignIn() {
  return (
    <div className="SignIn">
     
     
      <form action="" className="sign-in-form">
      <h3 className="SignIn-name">SignIn</h3>
      <div className="lineup"></div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="Email" placeholder="Email" />

          <label htmlFor="passwoed">password</label>

          <input type="Password" placeholder="password" />

          <button className="signInBtn"> Sign In</button>

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
