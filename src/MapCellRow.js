import React from 'react';
import PropTypes from 'prop-types';
import MapCell from './MapCell';


function MapCellRow({columns, textures1D, textureDebug = false, showBorder = false}) {
    const listItems = [];
    for (let i = 0; i < columns; i++) {
        listItems.push(<MapCell 
            key={i} 
            texture={textures1D[i]} 
            showBorder={showBorder} 
            textureDebug={textureDebug}/>);
    }
    
    return (
        <>
            <div className="map-row">
                {listItems}
            </div>
        </>
    );
}

MapCellRow.propTypes = {
    columns: PropTypes.number.isRequired,
    textures1D: PropTypes.arrayOf(PropTypes.number).isRequired,
    textureDebug: PropTypes.bool,
    showBorder: PropTypes.bool
};

export default MapCellRow;