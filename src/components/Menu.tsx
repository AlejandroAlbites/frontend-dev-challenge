import React from 'react';
import search from '../assets/icons/search2.svg';
import { dataCategories } from '../mocks/dataMock';

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__search">
        <input
          className="menu__input"
          type="text"
          placeholder="Busca artículos, noticias, etc..."
        />
        <button className="menu__btn">
          <img
            className="nav__search-icon"
            src={search}
            alt="search"
            loading="lazy"
          />
          Búsqueda
        </button>
      </div>
      <div className="menu__categories">
        {dataCategories &&
          dataCategories.map((item) => (
            <div className="menu__category" key={item.id}>
              <h2 className="menu__title">{item.title}</h2>
              <span className="menu__line"></span>
              {item.topics.map((topic, index) => (
                <ul className="menu__topics" key={index}>
                  <li className="menu__topic">{topic}</li>
                </ul>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
