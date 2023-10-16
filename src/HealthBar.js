import React from 'react';
import PropTypes from 'prop-types';

function HealthBar({health = 100, maxHealth = 100}) {
    const healthPercentage = health / maxHealth * 100;
    const healthBarStyle = {
        width: `${healthPercentage}%`
    };
    const healthBarInnerClassName = healthPercentage > 25 ? "health-bar-inner" : "health-bar-inner low-health";
    const showHealthBar = health < maxHealth;

    let bar;
    if (showHealthBar) {
        bar = (
            <div className="health-bar">
                <div className={healthBarInnerClassName} style={healthBarStyle}></div>
            </div>
        );
    } else {
        bar = null
    }

    return (
        <>
        {bar}
        </>
    )
}

HealthBar.propTypes = {
    health: PropTypes.number.isRequired,
    maxHealth: PropTypes.number.isRequired
};

export default HealthBar;