import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const login = () => {
    localStorage.setItem('login', true);
    navigate('/dashboard');
  }
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if(login){
      navigate('/dashboard');
    }

  });

  // const navigateToDashboard = () => {
  //   history.push("/dashboard");
  // };

  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [userRecords, setUserRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const newUserRecords = {...userLogin, id: new Date().getTime().toString()};
    // setUserRecords([...userRecords, newUserRecords]);
    // console.log(userRecords);
    // setUserLogin({ email: "", password: ""});
    // let p = JSON.parse(localStorage.getItem('user'));
    // // console.log('parse',JSON.parse(p))
    // p.forEach(value => {
    //   if (value.email == userLogin.email && value.password == userLogin.password) {
    //     console.log('Login Success');
    //     // history.push("/dashboard");
    //   }
    //   else {
    //     console.log('Login Failed');
    //   }
    // });
    navigate("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>React App | SignIn</title>
      </Helmet>
      <div className="signin">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12">
              <div className="text-center mb-3">
                <h1>SignIn</h1>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="d-flex justify-content-center align-items-center">
                <form style={{ width: "30%" }} onSubmit={login}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      onChange={handleInput}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleInput}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary m-auto d-flex"
                  >
                    SignIn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
