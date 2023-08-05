import React, { useState } from 'react';
import axios from 'axios';

import './SignUp.css';
import signupImage from '../../assets/Cereal.jpg';

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isCheckedValue = event.target.checked;
    setIsChecked(isCheckedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', isChecked);


    const jsonPlaceholderEndpoint = 'https://jsonplaceholder.typicode.com/users';

    // Mock form data
    const formData = {
      name: event.target.elements.Name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      agreedToTerms: isChecked,
    };


    axios.post(jsonPlaceholderEndpoint, formData)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Form submission failed:', error);
      });
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
