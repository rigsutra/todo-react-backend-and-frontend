import './Signin.css'

function SignIn() {
    return(
       <div className='SignIn'>
        <h3 className='SignIn-name'>SignIn</h3>
        <div className='Card'></div>
        <div>
            <p>Email</p>
            <input type="Email" placeholder='Email'/>
            <p>password</p>
            <input type="Password" placeholder='password' />
            <button className='signInBtn'> Sign In</button>
            <p><a href="#">Forgotten Password?</a></p>
        </div>
        <div>
            <div></div>
            <button className='Signin-Signup-btn'>Sign Up</button>
        </div>
       </div>
    )

};

export default SignIn