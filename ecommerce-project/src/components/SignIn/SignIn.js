import React from 'react';


import './SignIn.css';
import signinImage from '../../assets/agriculturetools.jpg';


const SignIn = () => {

  return (
    <div className="form-comp cfb">
      <div className="form-and-image-container">
        <img src={signinImage} alt="Signin" />

        <div>
          <h1>Sign In!</h1>
          <form className="sign-in-form cfb">

            <label>
              Email:
              <br />
              <input />
            </label>
            <label>
              Password:
              <br />
              <input />
            </label>
            <br />
            <button>
              Sign In!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
