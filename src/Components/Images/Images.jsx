import React from 'react';
import './Images.scss';

import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import item1 from '../../assets/images/1-item.png';
import item2 from '../../assets/images/2-item.png';
import item3 from '../../assets/images/3-item.png';
import item4 from '../../assets/images/4-item.png';

export const Images = () => {
  const [src, setSrc] = React.useState(1);
  const [count, setCount] = React.useState(1);
  const changeSrc = () => {
    if (count + 1 > 4) {
      setSrc(1);
      setCount(1);
      return;
    };
    setSrc(src + 1);
    setCount(count + 1);
  };

  return (
    <div className="img-container">
      <div className="img-container__desktop">
        <img className="img-container__desktop_img" src={item1} alt="item" />
        <img className="img-container__desktop_img" src={item4} alt="item" />
        <img className="img-container__desktop_img" src={item3} alt="item" />
        <img className="img-container__desktop_img" src={item2} alt="item" />
      </div>
      <div className="img-container__mobile">
        <img className="img-container__desktop_img_mobile" src={require(`../../assets/images/${src}-item.png`)} alt="item" />
        <img onClick={changeSrc} className="img-container__arrow-left" src={arrowLeft} alt="item" />
        <img onClick={changeSrc} className="img-container__arrow-right" src={arrowRight} alt="item" />
      </div>
    </div>
  );
};