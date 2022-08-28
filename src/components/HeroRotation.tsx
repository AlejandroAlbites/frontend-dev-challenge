import React, { useEffect, useState } from 'react';
import { dataCarousel } from '../mocks/dataMock';

export const HeroRotation = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const nextSlide = (): void => {
    if (slideIndex !== dataCarousel.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataCarousel.length) {
      setSlideIndex(1);
    }
  };

  const moveDot = (index: number): void => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  });
  return (
    <section className="slider">
      {dataCarousel.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? 'slider__slide slider__slide--active-anim'
                : 'slider__slide'
            }>
            <img src={obj.image} alt={obj.title} loading="lazy" />
            <div className="text">
              <h1 className="text__title">
                Su viaje de{' '}
                <span className="text__key-word">salud emocional</span>
                <br />
                empieza aquí
              </h1>
              <h2 className="text__sub-title">
                Conoce nuestros <br />
                profesionales con licencia
              </h2>
              <p className="text__paragraph">
                Todos se somenten a un proceso seguro de verificación y
                acreditación, además de adherirse a estrictos códigos de ética y
                confidencialidad
              </p>
            </div>
          </div>
        );
      })}
      <div className="dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? 'dots__dot dots__dot--active'
                : 'dots__dot'
            }></div>
        ))}
      </div>
    </section>
  );
};
