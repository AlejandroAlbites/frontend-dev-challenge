import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';

export const Notification = () => {
  const { notification } = useContext(Context);

  useEffect(() => {
    setTimeout(() => {
      notification(false);
    }, 3000);
  }, []);
  return (
    <div className="notification">
      <h2 className="notification__title">Mensaje enviado con éxito</h2>
      <div className="notification__load"></div>
    </div>
  );
};
