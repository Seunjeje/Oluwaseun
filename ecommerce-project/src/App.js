import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp'; // Import the SignUp component

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/signup" element={SignUp} /> {/* Define the route for the SignUp component */}
        {/* Add other routes and components as needed */}
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
