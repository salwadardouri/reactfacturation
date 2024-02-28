import React, { useState } from "react";
import "./SignupClient.css";
import SignupClient from "./SignupClient";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom"; // Change the import

function SignInForm () {
const [type, setType] = useState("signUp");
const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };
  const handleLoginSuccess = (user) => {
    const role = user?.roles[0];
    switch (role) {
      case "EMPLOYEUR":
        navigate("/DashEmployeur");
        break;
      case "ADMIN":
        navigate("/DashAdmin");
        break;
      case "CLIENT":
        navigate("/Client");
        break;
      default:
        break;
    }
  };
const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
 
      <div className="SignInForm">
    
      <div className={containerClass} id="container">
    
      {type === "signUp" ? (
          <SignupClient />
        ) : (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        )}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInForm; 
