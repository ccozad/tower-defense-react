import React from 'react';
import PropTypes from 'prop-types';

const textureMap = {
    1: {x: -1088, y: -1536}
}

function OrdinaryEnemy({
    texture, 
    textureDebug = false, 
    showBorder = false,
    x = 0,
    y = 0,
    rotation = 0
}) {
    let className = showBorder? "enemy-border" : "enemy"
    let css = {};
    if (Object.prototype.hasOwnProperty.call(textureMap, texture)) {
        css = {
            "backgroundPosition": `${textureMap[texture].x}px ${textureMap[texture].y}px`,
            "left": `${x}px`,
            "top": `${y}px`,
            "transform": `rotate(${-rotation}deg)`
        };
    }
    
    return (
        <>
            <div className={className} style={css}>{textureDebug ? texture: ''}</div>
        </>
    );
}

OrdinaryEnemy.propTypes = {
    texture: PropTypes.number.isRequired,
    textureDebug: PropTypes.bool,
    showBorder: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    rotation: PropTypes.number
};

export default OrdinaryEnemy;