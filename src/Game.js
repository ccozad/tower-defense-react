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
                    <li><Link to="/map-test">Map Test</Link></li>
                    <li><Link to="/level-1">Level 1</Link></li>
                    <li><Link to="/level-2">Level 2</Link></li>
                    <li><Link to="/move-test">Move Test</Link></li>
                    <li><Link to="/waypoint-test">Way Point Test</Link></li>
                </ul>
            </div>
        </>

    );
}