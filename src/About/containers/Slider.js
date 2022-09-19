import React, { useState, useEffect } from 'react'
import './styles/slider.scss';

export default function SimpleSlider(props) {

    const [data, setData] = useState();
    const [index, setIndex] = useState(1);


    const handleForwardToggle = () => {
        if (this.state.index <= this.state.data.length - 2) {
            setData(index++);
        } else {
            resetIndex();
        }
    }

    const handleBackwardToggle = () => {
        if (index > 0) {
            setIndex(index--)
        } else if (this.state.index <= 0) {
            resetIndex();
        }
    }

    const resetIndex = () => {
        this.setState({ index: 1 });
    }

    return (
        <div className="slider-container">
            <div className="slider-item-container">
                <i className="fas fa-caret-left" onClick={() => { handleBackwardToggle() }}></i>

                <i className="fas fa-caret-right" onClick={this.handleForwardToggle}></i>
                <div className="slider-item" title={data[index]}>
                    {data[index]}
                </div>
            </div>
        </div>
    )
}
