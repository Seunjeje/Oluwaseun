import React from 'react';

// styling
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-in-form cfb">
        <label>
          Email:
          <br/>
          <input />
        </label>
        <label>
          Password:
          <br/>
          <input />
        </label>
        <br/>
        <button>
          Sign In!
        </button>
      </form>
    </div>
  );
}

export default SignIn;
