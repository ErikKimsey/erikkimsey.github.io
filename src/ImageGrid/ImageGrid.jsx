import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
    const totalCells = 12;
    // ****
    return (
        <div
            className="grid-container"
        >
            {Array.from({ length: totalCells }, (_, index) => (
                <div className='grid-cell'>
                    $`CeLL : {index}`
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;