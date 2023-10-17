import React from 'react';
import PropTypes from 'prop-types';

function HealthBar({health = 100, maxHealth = 100, rotation = 0}) {
    const healthPercentage = health / maxHealth * 100;
    const healthBarStyle = {
        width: `${healthPercentage}%`,
    };
    let healthBarInnerClassName;
    if(healthPercentage >= 80) {
        healthBarInnerClassName = "health-bar-inner";
    } else if (healthPercentage > 30) {
        healthBarInnerClassName = "health-bar-inner medium-health";
    } else {
        healthBarInnerClassName = "health-bar-inner low-health";
    }
    const showHealthBar = health < maxHealth;

    let css = {
        transition: "transform 0.5s ease-out",
        transform: `rotate(${-rotation}deg)`,
        transformOrigin: "32px 32px"
    }

    let bar;
    if (showHealthBar) {
        bar = (
            <div className="health-bar" style={css}>
                <div className={healthBarInnerClassName} style={healthBarStyle}></div>
            </div>
        );
    } else {
        bar = <div></div>
    }

    return (
        <>
        {bar}
        </>
    )
}

HealthBar.propTypes = {
    health: PropTypes.number.isRequired,
    maxHealth: PropTypes.number.isRequired,
    rotation: PropTypes.number.isRequired
};

export default HealthBar;