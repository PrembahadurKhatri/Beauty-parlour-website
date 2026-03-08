import React, { useState } from 'react';
import './App.css'; // Make sure to create this file
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate();
     const goToPrivacyPolicy = () => {// Function to navigate to the Privacy Policy page when the button is clicked
    navigate('/privacy-policy');// Navigates to the '/privacy-policy' route defined in the App component's Routes
  }
  
  const [loginEmail,setLoginEmail]=useState("");
  const [loginpassword,setLoginpassword]=useState("");
  const [registerEmail,setRegisterEmail]=useState("");
  const [registerpassword,setRegisterpassword]=useState("");
  const [message,setMessage]=useState("");

const handleregister = () =>{
  const email=registerEmail.trim();
  const password=registerpassword.trim();  
  if(!email || !password){
        setMessage("Email and Password are required to register");
        return ;
    }
    localStorage.setItem("useremail",email);
    localStorage.setItem("userpassword",password);
    setMessage("Registration Sucessfull! You can login now");
    setRegisterEmail("");
    setRegisterpassword("");
}

const handleLogin = () =>{
    const savedEmail=localStorage.getItem("useremail");
    const savedPassword=localStorage.getItem('userpassword');
    if(loginEmail===savedEmail && loginpassword===savedPassword){
        setMessage("Login Sucessfull ");
    }else{
        setMessage("Login Unsucessfull")
}
}
const handleResetPassword = () =>{
    const savedEmail=localStorage.getItem("useremail");
    if(loginEmail===savedEmail){
        const newpassword =prompt('Enter Your new Password');
        if(newpassword){
        localStorage.setItem("userpassword",newpassword);
        setMessage('Password Reset Sucessfully');
    }
    }else{
        setMessage("Email not found . Can't Reset Password.")
    }
};
const [showpassword,setShowpassword]=useState(false);
  return (
    <div className="login-register-container">
      
      {/* Login Box */}
      <div className="login-box">
        <h3>Login</h3>
        <p>Username or email address <span>*</span></p>
        <input type="text" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />

        <p>Password <span>*</span></p>
        <div className="password-row">
          <input type={showpassword ? "text" : "password"} placeholder="Password" value={loginpassword} onChange={(e) => setLoginpassword(e.target.value)} />
        <button className="show-btn" onClick={() =>setShowpassword(!showpassword)}>
          { showpassword ? "Hide" : "Show" }
          </button>       
        </div>
       
       
        <button className="login-btn" onClick={handleLogin}>Log in</button>
        <button className="lost-password-btn" onClick={handleResetPassword}>Lost your password</button>
         {message && <p className="message">{message}</p>}
        </div>
      {/* Register Box */}
      <div className="register-box">
        <h4>Register</h4>
        <p>Email address <span>*</span></p>
        <input type="text" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
        <p>
          <p>Password<span>*</span></p>
          <div className="password-row">
          <input type="password" placeholder="Password" value={registerpassword} onChange={(e) => setRegisterpassword(e.target.value)} />
        </div>
          A link to set a new password will be sent to your email address.
        </p>
        <p>
          Your personal data will be used to support your experience throughout this website, 
          to manage access to your account, and for other purposes described in our
          <button className="privacy-link" onClick={goToPrivacyPolicy}> privacy policy</button>.
        </p>
        <button className="register-btn" onClick={handleregister}>Register</button>
      </div>
    
    </div>
  );
};

export default Login;