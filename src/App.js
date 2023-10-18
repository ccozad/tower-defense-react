import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from './Game';
import Level1 from './Level1';
import Level2 from './Level2';
import CollisionTest from './CollisionTest';
import HealthBarTest from './HealthBarTest';
import KitchenSinkTest from './KitchenSinkTest';
import MapTest from './MapTest';
import WayPointTest from './WayPointTest';
  
  export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/levels/1" element={<Level1 />} />
                <Route path="/levels/2" element={<Level2 />} />
                <Route path="/tests/collision" element={<CollisionTest />} />
                <Route path="/tests/map" element={<MapTest />} />
                <Route path="/tests/waypoint" element={<WayPointTest />} />
                <Route path="/tests/health-bar" element={<HealthBarTest />} />
                <Route path="/tests/kitchen-sink" element={<KitchenSinkTest />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    );
  }