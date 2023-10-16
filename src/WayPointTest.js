import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';
import { useState } from 'react';

/*function moveEnemy() {
    let dx = endPosition.x - currentPosition.x;
    let dy = endPosition.y - currentPosition.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    let ratio = speed / distance;
    let x = ratio * dx;
    let y = ratio * dy;
    currentPosition = {x: x, y: y};
    //console.log(currentPosition);
}*/
  
export default function WayPointTest() {
    const wayPoints = [
        {x: 0, y: 0},
        {x: 100, y: 100},
        {x: 300, y: 0},
        {x: 300, y: 300},
        {x: 50, y: 200},       
    ];

    const [targetWayPoint, setTargetWayPoint] = useState(1);

    // start an waypoint n
    // Move towards way point n + 1
    // Once we reach way point n + 1, start moving towards way point n + 2
    // And so on until we reach the final way point
    
    // Is the enemy at the final goal?
    // Yes, stop the enemy.
    // No, move the enemy.
    // Is the enemy at the next way point?
    // Yes, move the enemy to the following way point.
    // No, move the enemy towards the current way point.
    //
    // Movement detials
    // Move the enemy at a constant speed.
    // Speed is measured in pixels per second.
    // The enemy rotates to face the next way point.
    // Each update, consideres the amount of time that has passed since the last update.

    // This will not work because of the way React works.
    //
    // React may batch multiple setState() calls into a single update for performance.
    // Because this.props and this.state may be updated asynchronously, 
    // you should not rely on their values for calculating the next state

    function nextWayPoint() {
        setTargetWayPoint((targetWayPoint) => (targetWayPoint + 1));
    }
    
    return (
        <>
            <div>
                <p>Way Point Controls</p>
                <button onClick={() => { nextWayPoint()}}>Next Way Point</button>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={false} 
                    showBorder={true} 
                    wayPoints={wayPoints}
                    targetWayPoint={targetWayPoint}
                />
            </div>
            
        </>
    );
}