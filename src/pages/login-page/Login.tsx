import { LuUser2 } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";

const Login = () => {
  const onSubmitHandler = () => {
    console.log("Login Clicked");
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={onSubmitHandler}>
        <h1>Login</h1>
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
    </div>
  );
};

export default Login;
