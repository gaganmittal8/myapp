// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import Header from './common/Header';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// const Protected = (props) => {

//   // const [mode, setMode] = useState('light');
//   // const toggleMode = () => {
//   //   if (mode === 'light') {
//   //     setMode('dark');
//   //     document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//   //   }
//   //   else {
//   //     setMode('light');
//   //     document.body.style.backgroundColor = '#fff';
//   //   }
//   // }
//   // const Component = props.component;
//   // //const isAuthenticated = localStorage.getItem('token'); //authenticated using token
//   // const [isAuthenticated, setIsAuthenticated] = useState(true);

//   return (
//     <>
//       {/* <Helmet>
//         <title>React App | Dashboard</title>
//       </Helmet>
//       <Header title="Gagan's Tasks" mode={mode} toggleMode={toggleMode} /> */}
//       <div className="main_wrapper">
//         {/* {isAuthenticated ? ( <Component /> ) : ( <Redirect to={{ path: '/homepage' }} /> )} */}
//       </div>
//     </>
//   )
// }

// export default Protected;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from "./common/Footer";
import Header from "./common/Header";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  });

  return (
    <div>
      <Header />
      <div className="main">
        <Component />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Protected;
