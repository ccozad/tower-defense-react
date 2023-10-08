import React from 'react';
import PropTypes from 'prop-types';
import MapCell from './MapCell';


function MapCellRow({columns}) {
    const listItems = [];
    for (let i = 0; i < columns; i++) {
        listItems.push(<MapCell key={i} />);
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
    columns: PropTypes.number.isRequired
};

export default MapCellRow;