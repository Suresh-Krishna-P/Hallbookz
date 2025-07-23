import { useState } from "react";
import "/src/Css/SignUp.css";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [animation, setAnimation] = useState("");

  const handleSlide = (toLogin) => {
    setAnimation(toLogin ? "slide-right" : "slide-left");
    setTimeout(() => {
      setIsLogin(toLogin);
    }, 300); 
  };

  return (
    <div className="auth-wrapper">
      <div className={`auth-box ${animation}`}>
        {isLogin ? (
          <div className="auth-form">
           <center><h2>Login</h2></center> 
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="auth-submit">Login</button>
            <p>
              Don’t have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSlide(false);
                }}
              >
                Sign Up
              </a>
            </p>
          </div>
        ) : (
          <div className="auth-form">
            <center><h2>Sign Up</h2></center>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="auth-submit">Sign Up</button>
            <p>
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSlide(true);
                }}
              >
                Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
