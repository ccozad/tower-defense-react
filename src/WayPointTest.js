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
        {x: 300, y: 300},
        {x: 500, y: 500}
    ];

    const waypointThreshold = 10;

    const [angle, setAngle] = useState(0);
    const [started, setStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [startWayPoint, setStartWayPoint] = useState(0);
    const [destinationWayPoint, setDestinationWayPoint] = useState(1);
    // Unit of speed is px/sec
    const [speed, setSpeed] = useState(1);
    const [currentPosition, setCurrentPosition] = useState(wayPoints[startWayPoint]);

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

    function moveTowardWayPoint() {
        let dx = wayPoints[destinationWayPoint].x - currentPosition.x;
        let dy = wayPoints[destinationWayPoint].y - currentPosition.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        // Refactor to use speed
        let ratio = speed / distance;
        let x = ratio * dx;
        let y = ratio * dy;
        let newAngle  = Math.atan2(-dy, dx) * 180 / Math.PI;
        setAngle(newAngle);
        setCurrentPosition((currentPosition) => {
            return {x: currentPosition.x + x, y: currentPosition.y + y};
        });
        if (distance < waypointThreshold) {
            setStartWayPoint((startWayPoint) => (startWayPoint + 1) % wayPoints.length);
            setDestinationWayPoint((destinationWayPoint) => (destinationWayPoint + 1) % wayPoints.length);
        }
    }
    
    function start() {
        if(!started){
            setTimer(setInterval(moveTowardWayPoint, 1000/24));
            setStarted(true);
        }
    }
    
    function stop() {
        clearInterval(timer);
        setStarted(false);
    }
    return (
        <>
            <div>
                <p>Waypoint Controls</p>
                <button onClick={() => start()}>start</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => {
                    stop();
                    setAngle(0); 
                    setCurrentPosition(wayPoints[0]);
                    setStartWayPoint(0);
                    setDestinationWayPoint(1);
                    setSpeed(10);
                }}>Reset</button>
            </div>
            <div>
                <p>Angle: {angle} Position: ( {currentPosition.x.toFixed(0)}, {currentPosition.y.toFixed(0)} )</p>
                <p>Start Waypoint { startWayPoint } Destination Waypoint { destinationWayPoint }</p>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={false} 
                    showBorder={true} 
                    x={currentPosition.x}
                    y={currentPosition.y}
                    rotation={angle}/>
            </div>
            
        </>
    );
}