import React, { Component } from 'react';
import './styles/data_item.scss';

const DataItem = (props) => {
  return (
    <div className="data-item-container">
    {
    props.data
    }
    </div>
  )
}

export default DataItem;