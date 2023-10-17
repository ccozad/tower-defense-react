import React from 'react';
import OrdinaryEnemy from './OrdinaryEnemy';
import { useState } from 'react';

export default function HealthBarTest() {
    const [health, setHealth] = useState(100);

    function decreaseHealth() {
        setHealth((health) => (health - 10));
    }

    function increaseHealth() {
        setHealth((health) => (health + 10));
    }

    return (
        <>
            <div>
                <p>Health Controls</p>
                <button onClick={() => decreaseHealth()}>Decrease Health</button>
                <button onClick={() => increaseHealth()}>Increase Health</button>
            </div>
            <div>
                <OrdinaryEnemy 
                    texture={1} 
                    textureDebug={false} 
                    showBorder={true}
                    health={health}
                    maxHealth={100}
                    show={true}>

                </OrdinaryEnemy>
            </div>
        </>
    )
}