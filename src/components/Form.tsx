import React, { useState } from 'react';
import { Modal } from './Modal';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const Form = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [validations, setValidations] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const validateAll = (): boolean => {
    const { name, email, message } = values;
    const validations = { name: '', email: '', message: '' };
    let isValid = true;

    if (!name) {
      validations.name = 'El campo nombre es requerido';
      isValid = false;
    }

    if (!email) {
      validations.email = 'El campo correo es requerido';
      isValid = false;
    }

    if (!message) {
      validations.message = 'El campo mensaje es requerido';
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e: any): void => {
    const { name } = e.target;
    const value = values.name;
    let message = '';

    if (!value) {
      message = `El campo es requerido`;
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    setIsOpenModal(true);
    console.log('dataForm', values);
  };
  const { name, email, message } = values;

  const { name: nameVal, email: emailVal, message: messageVal } = validations;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="name">
        Nombre:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        value={name}
        id="name"
        onChange={handleChange}
        placeholder="Ingresa tu nombre"
        onBlur={validateOne}
      />
      <span className="form__error">{nameVal}</span>
      <label className="form__label" htmlFor="email">
        Correo:
      </label>
      <input
        className="form__input"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="Ingresa tu correo"
        onBlur={validateOne}
      />
      <span className="form__error">{emailVal}</span>
      <label className="form__label" htmlFor="text">
        Mensaje:
      </label>
      <textarea
        className="form__text"
        name="message"
        id="text"
        value={message}
        onChange={handleChange}
        placeholder="Ingresa un mensaje"
        onBlur={validateOne}
      />
      <span className="form__error">{messageVal}</span>
      <button className="form__button" type="submit">
        Enviar
      </button>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
      )}
    </form>
  );
};
