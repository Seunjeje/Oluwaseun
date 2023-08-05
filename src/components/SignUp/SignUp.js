import React, { useState } from 'react';
import './SignUp.css';
import signupImage from '../../assets/Cereal.jpg';



const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isCheckedValue = event.target.checked;
    console.log('Checkbox checked:', isCheckedValue);
    setIsChecked(isCheckedValue);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', isChecked);
  };



  return (
    <div className="form-comp cfb">

      <div className="form-and-image-container">

        <img src={signupImage} alt="Signup" />

        <div>
          <h2>Get Started Now</h2>
          <form onSubmit={handleSubmit}>


            <div>
              <label htmlFor="Name">Name:</label>
              <input type="text" id="Name" required />
            </div>


            <div>
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" required />
            </div>


            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required />
            </div>


            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                I agree to the terms & policy
              </label>
            </div>


            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 