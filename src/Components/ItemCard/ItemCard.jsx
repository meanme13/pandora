import React from 'react';
import './ItemCard.scss';
import { Images } from '../Images/Images';
import { Metadata } from '../Metadata/Metadata';
import { Polls } from '../Polls/Polls';
import CardData from '../../cardData.json';

export const ItemCard = () => {
  
  return (
    <div className="card-container">
      <Images />
      <div className="card-container__data">
        <Metadata data={CardData.card}/>
        <Polls data={CardData.polls}/>
      </div>
    </div>
  );
};