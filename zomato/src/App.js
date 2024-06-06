import './App.css';
import Header from './Components/Header';
import Home from './Components/Home'
import Filter from './Components/Filter'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import React from 'react';
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  return (
    <div>
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/restaurantDetails/:rName' element={<RestaurantDetails/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
    
    
  );
}

export default App;
