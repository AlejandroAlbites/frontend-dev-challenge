import React, { useEffect, useRef, useState } from 'react';
import { dataTestimony } from '../mocks/dataMock';

export const Testimony = () => {
  const [offSetLeftValue, setOffSetLeftValue] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const divCards: any = useRef<HTMLHeadingElement>(null);
  const divContainer: any = useRef<HTMLHeadingElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (divCards.current) {
      setOffSetLeftValue(e.clientX - divCards.current.offsetLeft);
      setDragging(true);
    }
  };
  const handleMouseUp: any = (e: React.MouseEvent) => {
    setDragging(false);
  };

  const handleMouseMove: any = (e: React.MouseEvent) => {
    if (dragging && divCards.current && offSetLeftValue) {
      divCards.current.style.left = `${e.clientX - offSetLeftValue}px`;
    }
    limitCards();
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dragging]);

  const limitCards = () => {
    const container_rect = divContainer.current.getBoundingClientRect();
    const cards_rect = divCards.current.getBoundingClientRect();

    if (parseInt(divCards.current.style.left) > 0) {
      divCards.current.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
      divCards.current.style.left = `-${
        cards_rect.width - container_rect.width
      }px`;
    }
  };

  return (
    <div
      className="testimony"
      onMouseUp={(e) => handleMouseUp(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseMove={(e) => handleMouseMove(e)}
      ref={divContainer}>
      <div className="testimony__cards" ref={divCards}>
        {dataTestimony &&
          dataTestimony.map((item) => (
            <div className="testimony__card" key={item.id}>
              <img
                className="testimony__img"
                src={item.img}
                alt={item.name}
                loading="lazy"
              />
              <div className="testimony__card-content">
                <h2 className="testimony__name">{item.name}</h2>
                <p className="testimony__text">{item.testimony}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
