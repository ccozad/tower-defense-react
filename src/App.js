import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './Game';
import MapTest from './MapTest';
  
  export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/map-test" element={<MapTest />} />
            </Routes>
        </div>
    );
  }