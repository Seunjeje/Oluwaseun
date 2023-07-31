import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import main from '../../assets/main.jpg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faCartPlus, faSlidersH } from '@fortawesome/free-solid-svg-icons';

import Poultry from '../../assets/Poultry.jpg';
import Vegetable from '../../assets/Vegetable.jpg';
import Fruit from '../../assets/Fruit.jpg';
import Cereal from '../../assets/Cereal.jpg';
import Dairy from '../../assets/Dairy.jpg';
import Inputs from '../../assets/Inputs.jpg';
import processedproducts from '../../assets/processedproducts.jpg';
import agriculturetools from '../../assets/agriculturetools.jpg';

const categories = [
  { name: 'Poultry', image: Poultry },
  { name: 'Vegetables', image: Vegetable },
  { name: 'Fruits', image: Fruit },
  { name: 'Cereals', image: Cereal },
  { name: 'Dairy', image: Dairy },
  { name: 'Inputs', image: Inputs },
  { name: 'processedproducts', image: processedproducts },
  { name: 'agriculturetools', image: agriculturetools },

];

const Header = () => {
  return (
    <header>
      <div className="header-logo-container">
        <img src={logo} alt="Logo" className="header-logo" />
        <nav>
          <ul className="header-nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/sell">Sell</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          
        </nav>
        <div className="header-search">
          <input type="text" placeholder="Search" />
          <div className="search-icon-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          <div className="love-icon-container">
            <FontAwesomeIcon icon={faHeart} className="love-icon" />
          </div>
          <div className="cart-icon-container">
            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
          </div>
          
          <div className="user-auth">
          {/* Use the Link component to link to the SignUp page */}
            <Link to="/signup">
              <button className="sign-up-button">Sign Up</button>
            </Link>
          </div>
          
         
          
       
        </div>
      </div>
      <header>
        <div className="header-image-container">
          <img src={main} alt="main" className="header-image" />
          <div className="header-image-text">
            <h1>Cultivating Connections, Nurturing Progress</h1>
            <h4>Seamless Online Marketplace for Agriculture and Industrial Products</h4>
          </div>
        </div>
      
       
      </header>
      <div className="header-categories">
        <h2 className="categories-heading">Categories</h2>
        <div className="category-container">
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <div className="category-image-container">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
          <div className="header-filters">
          <div className="filter-icon-container">
          <FontAwesomeIcon icon={faSlidersH} className="filter-icon" />
          </div>
          <span className="filter-text">Filters</span>
          </div>
        </div>
      
<div className="header-sort">
  <label htmlFor="sort-select">Sort By:</label>
  <select id="sort-select">
    <option value="price">Relevance</option>
    <option value="name">Name</option>
    {/* Add more sorting options as needed */}
  </select>
</div>


    </header>
  );
};

export default Header;
