import React from 'react';
import './Metadata.scss';

export const Metadata = () => {
  
  return (
    <div className="data-container">
      <p className="data-container__item-name">
        NOVITÀ | RISPARMIA 57€
      </p>
      <p className="data-container__title">
        Set Bracciale Sogna in Grande
      </p>
      <p className="data-container__price">
        <span className="data-container__price-old">€ 236,00</span>
        <span className="data-container__price-new">€ 179,00</span>
      </p>
      <div className="data-container__review">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Integer malesuada nunc vel risus commodo viverra. 
        Leo in vitae turpis massa sed elementum tempus egestas. 
        Augue neque gravida in fermentum et sollicitudin ac. 
        Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. 
        Massa massa ultricies mi quis hendrerit dolor magna eget est. 
        Urna et pharetra pharetra massa massa ultricies mi.
      </div>

    </div>
  );
};