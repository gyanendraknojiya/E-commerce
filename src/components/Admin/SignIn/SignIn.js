import React, { useState } from "react";
import firebase from "firebase";
import BeatLoader from "react-spinners/BeatLoader";
import swal from "sweetalert";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

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
    <div className="row mx-0 ">
      {isLoading && (
        <div className="fixedCenter">
          <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
        </div>
      )}
      <div className="col-md-4 mx-auto p-5 bg-light rounded mt-4 ">
        <div className="lead font-weight-bold mt-5 mb-4 text-center">LogIn</div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary px-4" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
