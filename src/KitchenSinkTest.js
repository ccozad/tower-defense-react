import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';
import { useState } from 'react';
  
export default function KitchenSinkTest() {
    const wayPoints = [
        {x: 0, y: 0},
        {x: 100, y: 100},
        {x: 300, y: 0},
        {x: 300, y: 300},
        {x: 50, y: 200},       
    ];

    const [targetWayPoint, setTargetWayPoint] = useState(1);
    const [health, setHealth] = useState(100);
    const [showBorder, setShowBorder] = useState(true);
    const [textureDebug, setTextureDebug] = useState(false);

    const wayPointList = wayPoints.map((wayPoint, index) => {
        if (index === targetWayPoint % wayPoints.length) {
            return (
                <li key={index} style={{color: "blue"}}>({wayPoint.x}, {wayPoint.y})</li>
            )
        } else {
            return (
                <li key={index}>({wayPoint.x}, {wayPoint.y})</li>
            )
        }
    });
    

    function nextWayPoint() {
        setTargetWayPoint((targetWayPoint) => (targetWayPoint + 1));
    }

    function decreaseHealth() {
        setHealth((health) => (health - 10));
    }

    function increaseHealth() {
        setHealth((health) => (health + 10));
    }
    
    return (
        <>
           <div>
                <p>Debug Controls</p>
                <input type="checkbox" id="showBorder" name="showBorder" checked={showBorder} onChange={() => setShowBorder(!showBorder)} />
                <label htmlFor="showBorder">Show Border</label>
                <input type="checkbox" id="textureDebug" name="textureDebug" checked={textureDebug} onChange={() => setTextureDebug(!textureDebug)} />
                <label htmlFor="textureDebug">Texture Debug</label>
            </div>
            <div>
                <p>Way Point Controls</p>
                <button onClick={() => { nextWayPoint()}}>Next Way Point</button>
                <p>Way Points</p>
                <ol>
                    {wayPointList}
                </ol>
            </div>
            <div>
                <p>Health Controls</p>
                <button onClick={() => decreaseHealth()}>Decrease Health</button>
                <button onClick={() => increaseHealth()}>Increase Health</button>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={textureDebug} 
                    showBorder={showBorder} 
                    wayPoints={wayPoints}
                    targetWayPoint={targetWayPoint}
                    health={health}
                    maxHealth={100} 
                />
            </div>
            
        </>
    );
}