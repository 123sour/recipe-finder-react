import React, { useState } from 'react';
import Mealcard from './Mealcard';

const Mainpage = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(''); // New state for category

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const fetchMeals = async (category) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`);
    const jsonData = await res.json();
    setData(jsonData.meals);
  };

  const handleSearch = () => {
    if (category) {
      fetchMeals(category); 
    }
  };

  return (
    <div className="container">
      <h1>🍽️ Food Recipe App</h1>
      
      {/* Category Selector */}
      <div className="category-select">
        <select onChange={handleCategoryChange} value={category}>
          <option value="">Select Category</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="American">American</option>
          <option value="Seafood">Seafood</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Meal Card Display */}
      <Mealcard detail={data} />
    </div>
  );
};

export default Mainpage;
