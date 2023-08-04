import React, { useState } from 'react';

// styling
import './SignUp.css';
import signupImage from '../../assets/Cereal.jpg'; // Replace 'path_to_your_image.jpg' with the actual image file path.



const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here, and use the 'isChecked' state as needed
    console.log('Form submitted:', isChecked);
  };
  
   

  return (
    <div className="form-comp cfb">
    {/* Form and Image Container */}
    <div className="form-and-image-container">
      {/* Image */}
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