import React from 'react';
import { dataCards } from '../mocks/dataMock';

export const CardContent = () => {
  return (
    <div className="card-principal">
      <div className="card-principal__img-container">
        <img
          className="card-principal__img"
          src={dataCards[0].img}
          alt={dataCards[0].title}
          loading="lazy"
        />
      </div>
      <h2 className="card-principal__category">{dataCards[0].category}</h2>
      <h3 className="card-principal__title">{dataCards[0].title}</h3>
      <p className="card-principal__text">{dataCards[0].text}</p>
    </div>
  );
};
