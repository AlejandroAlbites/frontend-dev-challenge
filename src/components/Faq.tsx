import React, { useEffect, useState } from 'react';
import arrowDown from '../assets/icons/arrow1.svg';
import arrowUp from '../assets/icons/arrow2.svg';
import { dataFaq } from '../mocks/dataMock';

export const Faq = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [faqId, setFaqId] = useState<number | null>(null);
  const dataWithSetShowAnswer = dataFaq.map((faq) =>
    faq.id === faqId
      ? {
          ...faq,
          isShow: showAnswer,
        }
      : faq
  );
  return (
    <section className="faq">
      {dataWithSetShowAnswer &&
        dataWithSetShowAnswer.map((item) => (
          <div
            className={item.isShow ? 'faq__container active' : 'faq__container'}
            key={item.id}>
            <div
              className="faq__question"
              onClick={() => {
                setFaqId(item.id);
                setShowAnswer((prev) => !prev);
              }}>
              <h2>{item.question}</h2>
              <img
                src={item.isShow ? arrowUp : arrowDown}
                loading="lazy"
                alt="arrow"
              />
            </div>
            <p className="faq__answer">{item.answer}</p>
          </div>
        ))}
    </section>
  );
};
