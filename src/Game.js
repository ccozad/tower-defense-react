import React from 'react';
import { Link } from 'react-router-dom';
  
  export default function Game() {
    return (
        <>
            <div>
                <h1>Game Part Testing</h1>
            </div>
            <div>
                <ul>
                    <li><Link to="/tests/map">Map Test</Link></li>
                    <li><Link to="/tests/waypoint">Way Point Test</Link></li>
                    <li><Link to="/tests/health-bar">Health Bar Test</Link></li>
                    <li><Link to="/tests/kitchen-sink">Kitchen Sink Test</Link></li>
                </ul>
            </div>
            <div>
                <h1>Levels</h1>
            </div>
            <div>
                <ul>
                    <li><Link to="/levels/1">Level 1</Link></li>
                    <li><Link to="/levels/2">Level 2</Link></li>
                </ul>
            </div>
        </>

    );
}