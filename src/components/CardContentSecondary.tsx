import React from 'react';
import { dataCards } from '../mocks/dataMock';

export const CardContentSecondary = () => {
  return (
    <section className="card-secondary">
      {dataCards &&
        dataCards.map((card) => (
          <div className="card-secondary__container" key={card.id}>
            <div className="card-secondary__img-container">
              <img
                className="card-secondary__img"
                src={card.img}
                alt={card.title}
                loading="lazy"
              />
            </div>
            <div className="card-secondary__body">
              <h2 className="card-secondary__category">{card.category}</h2>
              <h3 className="card-secondary__title">{card.title}</h3>
              <p className="card-secondary__text">{card.text}</p>
            </div>
          </div>
        ))}
    </section>
  );
};
