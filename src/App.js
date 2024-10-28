import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css"


const Home = React.lazy(() => import("./pages/Home"))
const Ads = React.lazy(() => import("./pages/Ads"))
const Flashsales = React.lazy(() => import("./pages/Flashsales"))
const Sidebar = React.lazy(() => import("./pages/Sidebar"))


function App() {
  return (
    <div className="App">
      <React.Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Ads' element={<Ads />} />
            <Route path='/Flashsales' element={<Flashsales />} />
            <Route path='/Sidebar' element={<Sidebar />} />
            
          </Routes>
        </BrowserRouter>
      </React.Suspense>

    </div >
  );
}

export default App;
