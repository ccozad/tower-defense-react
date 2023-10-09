import React from 'react';
import PropTypes from 'prop-types';

const width = 64;
const height = 64;

function xOffset(texture) {
    return (texture % 15) * -width;
}

function yOffset(texture) {
    return Math.floor(texture / 15) * -height;
}

function MapCell({texture, textureDebug = false, showBorder = false}) {
    let className = showBorder? "map-cell-border" : "map-cell"
    let css = {"backgroundPosition": `${xOffset(texture)}px ${yOffset(texture)}px`};
    
    return (
        <>
            <button className={className} style={css}>{textureDebug ? texture: ''}</button>
        </>
    );
}

MapCell.propTypes = {
    texture: PropTypes.number.isRequired,
    textureDebug: PropTypes.bool,
    showBorder: PropTypes.bool
};

export default MapCell;