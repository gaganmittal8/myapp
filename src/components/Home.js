import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };
  
  return (
    <>
      <Helmet>
        <title>React App | Home</title>
      </Helmet>
      <section className='home'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-sm-12'>
              <div className='text-center mb-5'><h1>Welcome to the HomePage</h1></div>
            </div>
            <div className='col-sm-12 d-flex justify-content-center align-items-center'>
              <div className='btn btn-primary mr-3' onClick={navigateToSignIn}>SignIn</div>
              <div className='btn btn-primary' onClick={navigateToSignUp}>SignUp</div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home;