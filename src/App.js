import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import MealInfo from './components/MealInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/meal/:mealid" element={<MealInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
