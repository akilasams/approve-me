import { LuUser2 } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import AIESECHumanAnimated from "../../assets/images/aiesec-human-animated.gif";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const onSubmitHandler = () => {
    console.log("Login Clicked");
  };

  const formSwicthController = (isLogin: boolean) => {
    setIsLogin(isLogin);
  };

  return (
    <div className="login-page-container">
      <div className="content-container">
        <div className="login-wrapper">
          <div className="aiesec-human">
            <img src={AIESECHumanAnimated} />
          </div>
          <div className="form-switch">
            <button
              className={`btn-switch left ${isLogin ? "active" : ""}`}
              onClick={() => formSwicthController(true)}
            >
              I Have an Account
            </button>
            <button
              className={`btn-switch right ${isLogin ? "" : "active"}`}
              onClick={() => formSwicthController(false)}
            >
              Create an Account
            </button>
          </div>
          {isLogin ? (
            <>
              <form action="" onSubmit={onSubmitHandler}>
                <div className="form-control">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                  <LuUser2 className="icon" />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <IoLockClosedOutline className="icon" />
                </div>
                <div className="form-control">
                  <button type="submit" className="btn-blue">
                    Login
                  </button>
                  <a href="#">Forgot Password?</a>
                </div>
              </form>
              <div className="form-control">
                <button className="btn-red">Login using Google</button>
              </div>
            </>
          ) : (
            <form action="" onSubmit={onSubmitHandler}>
              <div className="form-control">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="retypePassword"
                  id="retypePassword"
                  placeholder="Retype Password"
                />
              </div>
              <div className="form-control">
                <button type="submit" className="btn-blue">
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
