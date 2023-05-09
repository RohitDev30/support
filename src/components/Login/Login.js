import React, { useState } from "react";

function Login() {
  const [loginError, setLoginError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // perform login validation here

    // if (validationFails) {
    //   setLoginError(true);
    // } else {
    //   // successful login, redirect to dashboard
    // }
  };

  return (
    <div className="container">
      <p className="logoTxt">Support System</p>
      <div className="text-center">{/* insert logo image here */}</div>
      <div className="tab-content">
        <div id="login" className="tab-pane active">
          <form
            className="form-signin"
            id="popup-validation"
            onSubmit={handleSubmit}
          >
            {/* {loginError ? (
              <p
                className="text-center"
                style={{ color: "#F00", textDecoration: "blink" }}
              >
                LOGIN FAILED:: Invalid E-Mail or Password
              </p>
            ) : (
              <p className="text-muted text-center">
                Enter your Registered E-mail
              </p>
            )} */}
            <input
              type="text"
              placeholder="Email Id"
              className="validate[required,custom[email]] form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="validate[required] form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-lg btn-primary btn-block"
              name="submit"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </div>
        <div id="forgot" className="tab-pane">
          <form className="form-signin">
            <p className="text-muted text-center">Enter your valid e-mail</p>
            <input
              type="email"
              placeholder="mail@domain.com"
              required="required"
              className="form-control"
            />
            <br />
            <button
              className="btn btn-lg btn-danger btn-block"
              type="submit"
            >
              Recover Password
            </button>
          </form>
        </div>
        <div id="signup" className="tab-pane">
          <form className="form-signin">
            <input
              type="text"
              placeholder="username"
              className="form-control"
            />
            <input
              type="email"
              placeholder="mail@domain.com"
              className="form-control"
            />
            <input
              type="password"
              placeholder="password"
              className="form-control"
            />
            <button
              className="btn btn-lg btn-success btn-block"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="text-center">
        <ul className="list-inline">
          <li>
            <a
              className="text-muted"
              href="#login"
              data-toggle="tab"
            >
              Login
            </a>
          </li>
          <li>
            <a
              className="text-muted"
              href="#login"
              data-toggle="tab"
            >
              Forgot Password
            </a>
          </li>
          <li>
            <a
              className="text-muted"
              href="#login"
              data-toggle="tab"
            >
              Signup
            </a>
          </li>
          </ul>
        </div>
        </div>
  )}
  export default Login;