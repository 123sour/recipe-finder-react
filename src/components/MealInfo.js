import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealInfo = () => {
  const { mealid } = useParams();
  const [mealInfo, setMealInfo] = useState(null);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const data = await res.json();
      setMealInfo(data.meals[0]);
    };
    getInfo();
  }, [mealid]);

  return (
    <div style={{ padding: '20px' }}>
      {mealInfo ? (
        <>
          <h1>{mealInfo.strMeal}</h1>
          <img
            src={mealInfo.strMealThumb}
            alt={mealInfo.strMeal}
            style={{ width: '300px', borderRadius: '10px' }}
          />
          <h3>Instructions</h3>
          <p>{mealInfo.strInstructions}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MealInfo;
