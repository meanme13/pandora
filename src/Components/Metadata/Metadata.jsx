import React from 'react';
import './Metadata.scss';

export const Metadata = (props) => {
  
  return (
    <div className="data-container">
      <p className="data-container__item-name">
        {props.data.itemName}
      </p>
      <p className="data-container__title">
        {props.data.title}
      </p>
      <p className="data-container__price">
        <span className="data-container__price-old">
          {props.data.price}
        </span>
        <span className="data-container__price-new">
          {props.data.newPrice}
        </span>
      </p>
      <div className="data-container__review">
        {props.data.review}
      </div>
    </div>
  );
};