import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
  const [userRegistration, setUserRegistration] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const newRecords = {
    //   ...userRegistration,
    //   id: new Date().getTime().toString(),
    //   phone: "1234567890",
    //   work: "abc",
    // };
    // setRecords([...records, newRecords]);
    // console.log(records);
    // setUserRegistration({ name: "", email: "", password: "", cpassword: "" });
    // localStorage.setItem("user", JSON.stringify(records));
    // navigate("/session-timed-out");

  };

  return (
    <>
      <Helmet>
        <title>React App | SignUp</title>
      </Helmet>
      <div className="signin">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12">
              <div className="text-center mb-3">
                <h1>SignUp</h1>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="d-flex justify-content-center align-items-center">
                <form style={{ width: "30%" }} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter name"
                      onChange={handleInput}
                      value={userRegistration.name}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleInput}
                      value={userRegistration.email}
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
                      value={userRegistration.password}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cpassword"
                      name="cpassword"
                      placeholder="Confirm Password"
                      onChange={handleInput}
                      value={userRegistration.cpassword}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary m-auto d-flex"
                  >
                    SignUp
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

export default SignUp;
