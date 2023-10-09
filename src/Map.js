import React from 'react';
import PropTypes from 'prop-types';
import MapCellRow from './MapCellRow';

function Map({rows, columns, textures2D, textureDebug = false, showBorder = false}) {
    const listItems = [];
    for (let i = 0; i < rows; i++) {
        listItems.push(<MapCellRow 
            key={i} 
            columns={columns} 
            textures1D={textures2D[i]}
            textureDebug={textureDebug}
            showBorder={showBorder} />);
    }

    return (
        <>
            <div className="map">
                {listItems}
            </div>
        </>
    );
}

Map.propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    textures2D: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    textureDebug: PropTypes.bool,
    showBorder: PropTypes.bool

};

export default Map;