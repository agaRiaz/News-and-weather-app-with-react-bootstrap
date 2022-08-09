import React from "react";
import Navi from "./components/Navi";
import {Routes, Route, Navigate} from 'react-router-dom';
import WeatherContainer from "./components/WeatherContainer";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";



function App() {
  return (
    <div >
    <Navi />
    <Routes>
      <Route path='/' element={<WeatherContainer />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='*' element={<Navigate replace to='/' />} />


    </Routes>
    
    <Footer />
    </div>
  );
}

export default App;
