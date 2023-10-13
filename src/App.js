import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './Game';
import MapTest from './MapTest';
import Level1 from './Level1';
import MoveTest from './MoveTest';
  
  export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/map-test" element={<MapTest />} />
                <Route path="/level-1" element={<Level1 />} />
                <Route path="/move-test" element={<MoveTest />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
  }