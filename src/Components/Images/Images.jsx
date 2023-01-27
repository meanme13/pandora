import React, { useState } from 'react';
import './Images.scss';

import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowLeftDis from '../../assets/images/arrow-left-dis.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import arrowRightDis from '../../assets/images/arrow-right-dis.svg';
import item1 from '../../assets/images/1-item.png';
import item2 from '../../assets/images/2-item.png';
import item3 from '../../assets/images/3-item.png';
import item4 from '../../assets/images/4-item.png';

export const Images = () => {

  return (
    <div className="img-container">
      <div className="img-container__desktop">
        <img className="img-container__desktop_img" src={item1} alt="item" />
        <img className="img-container__desktop_img" src={item4} alt="item" />
        <img className="img-container__desktop_img" src={item3} alt="item" />
        <img className="img-container__desktop_img" src={item2} alt="item" />
      </div>
      <div className="img-container__mobile">
        <img className="img-container__desktop_img_mobile" src={item1} alt="item" />
      </div>
    </div>
  );
};