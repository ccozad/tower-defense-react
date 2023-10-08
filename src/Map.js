import React from 'react';
import PropTypes from 'prop-types';
import MapCellRow from './MapCellRow';

function Map({rows, columns}) {
    const listItems = [];
    for (let i = 0; i < rows; i++) {
        listItems.push(<MapCellRow key={i} columns={columns} />);
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
    columns: PropTypes.number.isRequired
};

export default Map;