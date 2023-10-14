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


  
export default function Level1() {
    const wayPoints = [
        {x: 0, y: 0},
        {x: 100, y: 100},
    ];
    const [angle, setAngle] = useState(0);
    const [started, setStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(wayPoints[0]);

    function rotateEnemyCCW() {
        setAngle((angle) => (angle + 1) % 360);
    }

    function rotateEnemyCW() {
        setAngle((angle) => (angle - 1) % 360);
    }

    function moveEnemyEast() {
        setCurrentPosition((currentPosition) => {
            return {x: currentPosition.x + 1, y: currentPosition.y};
        });
    }

    function moveEnemyWest() {
        setCurrentPosition((currentPosition) => {
            return {x: currentPosition.x - 1, y: currentPosition.y};
        });
    }

    function moveEnemyNorth() {
        setCurrentPosition((currentPosition) => {
            return {x: currentPosition.x, y: currentPosition.y - 1};
        });
    }

    function moveEnemySouth() {
        setCurrentPosition((currentPosition) => {
            return {x: currentPosition.x, y: currentPosition.y + 1};
        });
    }

    function startMoveNorth() {
        if(!started){
            setAngle(90);
            setTimer(setInterval(moveEnemyNorth, 1000/24));
            setStarted(true);
        }
    }

    function startMoveSouth() {
        if(!started){
            setAngle(270);
            setTimer(setInterval(moveEnemySouth, 1000/24));
            setStarted(true);
        }  
    }

    function startMoveEast() {
        if(!started){
            setAngle(0);
            setTimer(setInterval(moveEnemyEast, 1000/24));
            setStarted(true);
        }
    }

    function startMoveWest() {
        if(!started){
            setAngle(180);
            setTimer(setInterval(moveEnemyWest, 1000/24));
            setStarted(true);
        }
    }
    
    function startCCW() {
        if(!started){
            setTimer(setInterval(rotateEnemyCCW, 1000/24));
            setStarted(true);
        }
    }

    function startCW() {
        if(!started){
            setTimer(setInterval(rotateEnemyCW, 1000/24));
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
                <p>Rotation Controls</p>
                <button onClick={() => startCCW()}>Rotate CCW</button>
                <button onClick={() => startCW()}>Rotate CW</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => {
                    stop();
                    setAngle(0); 
                    setCurrentPosition(wayPoints[0]);
                }}>Reset</button>
            </div>
            <div>
                <p>Movement Controls</p>
                <button onClick={() => startMoveNorth()}>Move North</button>
                <button onClick={() => startMoveSouth()}>Move South</button>
                <button onClick={() => startMoveEast()}>Move East</button>
                <button onClick={() => startMoveWest()}>Move West</button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => {
                    stop();
                    setCurrentPosition(wayPoints[0]);
                }}>Reset</button>
            </div>
            <div>
                <p>Angle: {angle} Position: ( {currentPosition.x}, {currentPosition.y} )</p>
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