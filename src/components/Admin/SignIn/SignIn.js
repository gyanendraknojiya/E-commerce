import React, { useState } from "react";
import firebase from "firebase";
import BeatLoader from "react-spinners/BeatLoader";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      swal("Error", "Please enter your email and password!", "error");
      return;
    }

    setIsloading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        setIsloading(false);
        // Signed in
        // ...
      })
      .catch((error) => {
        setIsloading(false);
        // var errorCode = error.code;
        var errorMessage = error.message;
        swal("Error", errorMessage, "error");
      });
  };
  return (
    <div className=" ">
      {isLoading && (
        <div className="fixedCenter">
          <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
        </div>
      )}
      <div className="login-container">
        <div className="login  px-5 pb-5 bg-light rounded  shadow-lg border ">
          <div className="display-4  mt-5 mb-4 text-center">Login</div>
          <div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="font-weight-bold ">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group position-relative">
                <span
                  className="show-hide-password cp p-2"
                  onClick={() => setShowPassword(!ShowPassword)}
                >
                  {ShowPassword ? (
                    <i className=" fas fa-eye"></i>
                  ) : (
                    <i class="fas fa-eye-slash"></i>
                  )}
                </span>
                <label className="font-weight-bold">Password:</label>
                <input
                  type={`${ShowPassword?"text":"password"}`}
                  name="password"
                  placeholder="Enter your password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group text-center ">
                <button
                  className="btn btn-primary px-4 w-100 my-2"
                  type="submit"
                >
                  Login
                </button>
              </div>

              <div className="text-center">
                <div>
                  <small>
                    <b>------------- Or -------------</b>
                  </small>
                </div>
                <Link to="/">
                  <span className="btn btn-dark my-3 px-3">Go to home</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
