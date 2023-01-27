import React from 'react';
import './ItemCard.scss';
import { Images } from '../Images/Images';
import { Metadata } from '../Metadata/Metadata';
import { Polls } from '../Polls/Polls';

export const ItemCard = () => {

  return (
    <div className="card-container">
      <Images />
      <div className="card-container__data">
        <Metadata />
        <Polls />
      </div>
    </div>
  );
};