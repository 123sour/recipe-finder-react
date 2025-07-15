import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcard = ({ detail }) => {
  return (
    <div className="meal-container">
      {detail ? (
        detail.map((curItem) => (
          <div className="meal-card" key={curItem.idMeal}>
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>
            <NavLink to={`/meal/${curItem.idMeal}`}>
              <button>Recipe</button>
            </NavLink>
          </div>
        ))
      ) : (
        <p>No meals to show</p>
      )}
    </div>
  );
};

export default Mealcard;
