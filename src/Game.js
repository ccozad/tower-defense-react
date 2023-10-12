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
                </ul>
            </div>
        </>

    );
}